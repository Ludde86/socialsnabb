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
import { plattformar } from "./data/plattformar";
import { defaultValues } from "./data/defaultValues";
import { inlaggMallar } from "./data/inlagg/inlaggMallar";
import { ideerPerForetag } from "./data/ideerPerForetag";

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

  // ====================
  // FUNKTIONER
  // ====================
  const skapaInlagg = () => {
    if (!foretag.trim()) {
      alert("Skriv företagsnamn först.");
      return;
    }

    const nyttInlagg = inlaggMallar[ton][plattform](foretag, typ);

    const nyaHashtags = hashtagsData[typ] || "";

    setHashtags(nyaHashtags);

    setText(nyttInlagg);

    const alternativMallar = {
      Vänlig: vanligAlternativ(foretag, typ),
      Säljande: saljandeAlternativ(foretag),
      Professionell: professionellaAlternativ(foretag, typ),
    };

    setAlternativ(alternativMallar[ton]);
  };

  const kopieraText = () => {
    navigator.clipboard.writeText(text);

    setKopierat(true);

    setTimeout(() => {
      setKopierat(false);
    }, 3000);
  };

  const skapaIde = () => {
    const ideLista = ideerPerForetag[typ] || ideer;

    const slumpadIde = ideLista[Math.floor(Math.random() * ideLista.length)];

    setIde(slumpadIde);
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
      </div>
      {/* Resultat */}
      <ResultSection
        text={text}
        hashtags={hashtags}
        alternativ={alternativ}
        ide={ide}
        kopieraText={kopieraText}
      />
      ;{kopierat && <p>✅ Inlägget har kopierats!</p>}
      <Footer />
    </div>
  );
}

export default App;
