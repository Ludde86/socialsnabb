import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickTest from "./components/QuickTest";
import ResultSection from "./components/ResultSection";

import { useState } from "react";
import { ideer } from "./data/ideer";
import { vanligAlternativ } from "./data/vanligAlternativ";
import { saljandeAlternativ } from "./data/saljandeAlternativ";
import { professionellaAlternativ } from "./data/professionellaAlternativ";
import { hashtagsData } from "./data/hashtags";
import { foretagstyper } from "./data/foretagstyper";
import { tonlagen } from "./data/tonlagen";
import { syften } from "./data/syften";
import { plattformar } from "./data/plattformar";
import { defaultValues } from "./data/defaultValues";
import { inlaggMallar } from "./data/inlagg/inlaggMallar";
import { ideerPerForetag } from "./data/ideerPerForetag";
import { pizzeriaSyften } from "./data/pizzeriaSyften";
import { frisorSyften } from "./data/frisorSyften";
import { gymSyften } from "./data/gymSyften";
import { syftenPerForetag } from "./data/syftenPerForetag";

function App() {
  // ====================
  // STATE
  // ====================
  const [foretag, setForetag] = useState(defaultValues.foretag);
  const [text, setText] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [ide, setIde] = useState("");
  const [typ, setTyp] = useState(defaultValues.typ);
  const [ton, setTon] = useState(defaultValues.ton);
  const [plattform, setPlattform] = useState(defaultValues.plattform);
  const [kopierat, setKopierat] = useState(false);
  const [alternativ, setAlternativ] = useState([]);
  const [syfte, setSyfte] = useState("🗣️ Engagemang");
  const [fokus, setFokus] = useState("");
  // Sparar användarens favoritinlägg
  const [favorit, setFavorit] = useState("");
  // Inlägg för kommande vecka
  const [veckoplan, setVeckoplan] = useState([]);

  // ====================
  // FUNKTIONER
  // ====================

  // Skapar ett nytt inlägg utifrån
  // företag, tonläge, syfte och fokus.
  const skapaInlagg = () => {
    if (!foretag.trim()) {
      alert("Skriv företagsnamn först.");
      return;
    }

    const nyttInlagg = inlaggMallar[ton][plattform](foretag, typ);

    let slutligtInlagg = nyttInlagg;

    if (typ === "Pizzeria") {
      // Hämta alla texter för valt syfte
      const syfteTexter = pizzeriaSyften[syfte];

      if (syfteTexter) {
        // Slumpa fram en av texterna
        slutligtInlagg =
          syfteTexter[Math.floor(Math.random() * syfteTexter.length)];

        // Om den slumpade posten är en funktion,
        // kör den och skicka med företagsnamn och fokus
        if (typeof slutligtInlagg === "function") {
          slutligtInlagg = slutligtInlagg(foretag, fokus);
        }
      }
    }

    if (typ === "Frisör") {
      const syfteTexter = frisorSyften[syfte];

      if (syfteTexter) {
        slutligtInlagg =
          syfteTexter[Math.floor(Math.random() * syfteTexter.length)];
      }
    }

    if (typ === "Gym") {
      const syfteTexter = gymSyften[syfte];

      if (syfteTexter) {
        slutligtInlagg =
          syfteTexter[Math.floor(Math.random() * syfteTexter.length)];
      }
    }

    const nyaHashtags = hashtagsData[typ] || "";

    setHashtags(nyaHashtags);

    setText(slutligtInlagg);

    const alternativMallar = {
      Vänlig: vanligAlternativ(foretag, typ),
      Säljande: saljandeAlternativ(foretag),
      Professionell: professionellaAlternativ(foretag, typ),
    };

    setAlternativ(alternativMallar[ton]);
  };

  // Kopierar inlägget till urklipp
  // och visar bekräftelse i 3 sekunder
  const kopieraText = () => {
    navigator.clipboard.writeText(text);

    setKopierat(true);

    setTimeout(() => {
      setKopierat(false);
    }, 3000);
  };

  // Framtida funktion:
  // Generera flera inlägg samtidigt
  // för en hel vecka.
  const skapaIde = () => {
    const ideLista = ideerPerForetag[typ] || ideer;

    const slumpadIde = ideLista[Math.floor(Math.random() * ideLista.length)];

    setIde(slumpadIde);
  };

  // Återställer formuläret till startläget
  const rensaFormular = () => {
    setForetag(defaultValues.foretag);
    setTyp(defaultValues.typ);
    setTon(defaultValues.ton);
    setPlattform(defaultValues.plattform);

    setSyfte("🗣️ Engagemang");
    setFokus("");

    setText("");
    setHashtags("");
    setAlternativ([]);
    setIde("");
  };

  // Sparar aktuellt inlägg som favorit
  const sparaFavorit = () => {
    setFavorit(text);
  };

  // Kopierar valfritt alternativ
  const kopieraAlternativ = (text) => {
    navigator.clipboard.writeText(text);

    setKopierat(true);

    setTimeout(() => {
      setKopierat(false);
    }, 3000);
  };

  // Skapar ett riktigt inlägg till veckoplanen.
  // Företagstypen väljer rätt samling och syftet väljer rätt textlista.
  const skapaVeckoText = (valtSyfte) => {
    // Hämta alla syftestexter för vald företagstyp.
    const foretagetsSyften = syftenPerForetag[typ];

    // Om företagstypen ännu saknar egna syftestexter,
    // använder vi en enkel reservtext.
    if (!foretagetsSyften) {
      return fokus
        ? `Berätta om ${fokus} hos ${foretag}.`
        : `Berätta något intressant om ${foretag}.`;
    }

    // Hämta listan med texter för veckodagens syfte.
    const syfteTexter = foretagetsSyften[valtSyfte];

    // Om syftet saknar texter använder vi också reservtexten.
    if (!syfteTexter || syfteTexter.length === 0) {
      return fokus
        ? `Berätta om ${fokus} hos ${foretag}.`
        : `Berätta något intressant om ${foretag}.`;
    }

    // Slumpa fram en text eller textfunktion från listan.
    const slumpadText =
      syfteTexter[Math.floor(Math.random() * syfteTexter.length)];

    // En funktionsmall kan använda företagsnamn och fokus.
    if (typeof slumpadText === "function") {
      return slumpadText(foretag, fokus);
    }

    // En vanlig textmall kan returneras direkt.
    return slumpadText;
  };

  // Skapar en varierad veckoplan med tre olika syften.
  // Syftena blandas så att veckoplanen kan variera mellan klicken.
  const skapaVeckoplan = () => {
    const dagar = ["Måndag", "Onsdag", "Fredag"];

    // Skapa en kopia av syfteslistan och blanda den.
    const blandadeSyften = [...syften].sort(() => Math.random() - 0.5);

    // Använd de tre första syftena i den blandade listan.
    const valdaSyften = blandadeSyften.slice(0, 3);

    // Koppla varje veckodag till ett syfte och ett riktigt inlägg.
    const plan = dagar.map((dag, index) => {
      const valtSyfte = valdaSyften[index];

      return {
        dag: dag,
        syfte: valtSyfte,
        text: skapaVeckoText(valtSyfte),
      };
    });

    setVeckoplan(plan);
  };

  // ====================
  // RENDER
  // ====================
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "#f8fafc",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      }}
    >
      <Header />
      {/* Snabbtest */}
      <QuickTest />
      {/* Företagsuppgifter */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#1e293b",
          }}
        >
          📝 Företagsuppgifter
        </h3>
        <p
          style={{
            color: "#64748b",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Fyll i företagets namn och välj hur inlägget ska genereras. Klicka
          sedan på "Skapa mitt inlägg".
        </p>

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Företagsnamn
        </label>

        <input
          type="text"
          placeholder="Skriv företagsnamn"
          value={foretag}
          onChange={(e) => setForetag(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            boxSizing: "border-box",
            borderRadius: "8px",
            border: "1px solid #dbe2ea",
          }}
        />

        <label
          style={{
            display: "block",
            marginTop: "16px",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          🎯 Vad vill du lyfta fram i inlägget?
        </label>

        <input
          type="text"
          placeholder="Exempel: Vesuvio, Luncherbjudande, Fredagspizza eller Ny meny"
          value={fokus}
          onChange={(e) => setFokus(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            boxSizing: "border-box",
            borderRadius: "8px",
            border: "1px solid #dbe2ea",
          }}
        />

        <br />
        <br />

        <div style={{ marginTop: "24px" }} />

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            marginTop: "24px",
            fontWeight: "600",
          }}
        >
          Inställningar
        </label>

        <select
          value={typ}
          onChange={(e) => setTyp(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          {foretagstyper.map((typNamn) => (
            <option key={typNamn}>{typNamn}</option>
          ))}
        </select>

        <select
          value={ton}
          onChange={(e) => setTon(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          {tonlagen.map((tonNamn) => (
            <option key={tonNamn}>{tonNamn}</option>
          ))}
        </select>

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            marginTop: "20px",
            fontWeight: "700",
            color: "#1e293b",
            fontSize: "16px",
          }}
        >
          🎯 Vad vill du uppnå med inlägget?
        </label>

        <p
          style={{
            marginTop: "0",
            marginBottom: "10px",
            fontSize: "14px",
            color: "#64748b",
          }}
        >
          Välj målet med inlägget så skapar SocialSnabb ett bättre förslag.
        </p>

        <select value={syfte} onChange={(e) => setSyfte(e.target.value)}>
          {syften.map((syfteNamn) => (
            <option key={syfteNamn}>{syfteNamn}</option>
          ))}
        </select>

        <select
          value={plattform}
          onChange={(e) => setPlattform(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          {plattformar.map((plattformNamn) => (
            <option key={plattformNamn}>{plattformNamn}</option>
          ))}
        </select>

        <br />
        <br />

        <button
          onClick={skapaInlagg}
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#2563eb",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          🚀 Skapa mitt inlägg
        </button>

        <button
          onClick={skapaInlagg}
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            border: "1px solid #dbe2ea",
            borderRadius: "8px",
            marginTop: "10px",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          🎲 Slumpa nytt inlägg
        </button>

        <button
          onClick={skapaVeckoplan}
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            border: "1px solid #dbe2ea",
            borderRadius: "8px",
            marginTop: "10px",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          📅 Skapa veckoplan
        </button>

        <br />
        <br />

        <button
          onClick={skapaIde}
          style={{
            width: "100%",
            backgroundColor: "#f8fafc",
            border: "1px solid #dbe2ea",
            borderRadius: "8px",
            marginLeft: "10px",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Ge mig en Idé
        </button>

        <button
          onClick={rensaFormular}
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            border: "1px solid #dbe2ea",
            borderRadius: "8px",
            marginTop: "10px",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          🔄 Börja om
        </button>
      </div>
      {/* Resultat */}
      <ResultSection
        text={text}
        hashtags={hashtags}
        alternativ={alternativ}
        ide={ide}
        kopieraText={kopieraText}
        kopierat={kopierat}
        favorit={favorit}
        sparaFavorit={sparaFavorit}
        kopieraAlternativ={kopieraAlternativ}
        syfte={syfte}
        veckoplan={veckoplan}
      />

      <Footer />
    </div>
  );
}

export default App;
