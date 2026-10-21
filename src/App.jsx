import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickTest from "./components/QuickTest";
import ResultSection from "./components/ResultSection";
import InputSection from "./components/InputSection";

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
import { skapaVeckoText } from "./utils/skapaVeckoText";
import { hamtaSyfteText } from "./utils/hamtaSyfteText";
import { kopieraTillUrklipp } from "./utils/kopiering";
import { skapaVeckoplanData } from "./utils/skapaVeckoplan";

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
  // Visar en bekräftelse när hela veckoplanen har kopierats.
  const [veckoplanKopierad, setVeckoplanKopierad] = useState(false);

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

    // Hämtar en syftesanpassad text.
    // Huvudinlägget används som reserv om specialtext saknas.
    const slutligtInlagg = hamtaSyfteText({
      typ: typ,
      syfte: syfte,
      foretag: foretag,
      fokus: fokus,
      reservtext: nyttInlagg,
    });

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

  // Kopierar huvudinlägget
  const kopieraText = () => {
    kopieraTillUrklipp(text, setKopierat);
  };

  // Kopierar ett alternativt inlägg
  const kopieraAlternativ = (text) => {
    kopieraTillUrklipp(text, setKopierat);
  };

  // Skapar en ny veckoplan
  const skapaVeckoplan = () => {
    const plan = skapaVeckoplanData(skapaVeckoText, typ, foretag, fokus);

    setVeckoplan(plan);
  };

  // Sätter ihop veckoplanens alla dagar till en enda text
  // och kopierar sedan hela planen till urklipp.
  const kopieraVeckoplan = () => {
    const veckoplanText = veckoplan
      .map((post) => `${post.dag}\n${post.syfte}\n${post.text}`)
      .join("\n\n");

    navigator.clipboard.writeText(veckoplanText);

    setVeckoplanKopierad(true);

    setTimeout(() => {
      setVeckoplanKopierad(false);
    }, 3000);
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

        <InputSection
          foretag={foretag}
          setForetag={setForetag}
          fokus={fokus}
          setFokus={setFokus}
          typ={typ}
          setTyp={setTyp}
          ton={ton}
          setTon={setTon}
          syfte={syfte}
          setSyfte={setSyfte}
          plattform={plattform}
          setPlattform={setPlattform}
          foretagstyper={foretagstyper}
          tonlagen={tonlagen}
          syften={syften}
          plattformar={plattformar}
        />

        <br />
        <br />

        <div style={{ marginTop: "24px" }} />

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
        kopieraVeckoplan={kopieraVeckoplan}
        veckoplanKopierad={veckoplanKopierad}
      />

      <Footer />
    </div>
  );
}

export default App;
