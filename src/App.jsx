import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickTest from "./components/QuickTest";
import ResultSection from "./components/ResultSection";
import InputSection from "./components/InputSection";
import ButtonsSection from "./components/ButtonsSection";
import ProfileLibrary from "./components/ProfileLibrary";

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
import { hamtaVeckonummer } from "./utils/hamtaVeckonummer";
import { skapaVeckoplanText } from "./utils/skapaVeckoplanText";

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
  const [favoriter, setFavoriter] = useState(
    JSON.parse(localStorage.getItem("favoriter")) || [],
  );
  // Inlägg för kommande vecka
  const [veckoplan, setVeckoplan] = useState([]);
  // Namnet på vald veckostrategi
  const [veckostrategi, setVeckostrategi] = useState("");
  // Visar en bekräftelse när hela veckoplanen har kopierats.
  const [veckoplanKopierad, setVeckoplanKopierad] = useState(false);
  // Sparad veckoplan
  const [sparadVeckoplan, setSparadVeckoplan] = useState(
    JSON.parse(localStorage.getItem("sparadVeckoplan")) || null,
  );
  const [profil, setProfil] = useState(
    JSON.parse(localStorage.getItem("profil")) || null,
  );
  const [aktivProfil, setAktivProfil] = useState(null);
  const [profiler, setProfiler] = useState(
    JSON.parse(localStorage.getItem("profiler")) || [],
  );

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
    if (!text) return;

    const nyaFavoriter = [text, ...favoriter];

    setFavoriter(nyaFavoriter);

    localStorage.setItem("favoriter", JSON.stringify(nyaFavoriter));
  };

  const taBortFavorit = (index) => {
    const nyaFavoriter = favoriter.filter((_, i) => i !== index);

    setFavoriter(nyaFavoriter);

    localStorage.setItem("favoriter", JSON.stringify(nyaFavoriter));
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
    const resultat = skapaVeckoplanData(skapaVeckoText, typ, foretag, fokus);

    setVeckoplan(resultat.plan);

    setVeckostrategi(resultat.strategi);
  };

  // Sätter ihop veckoplanens alla dagar till en enda text
  // och kopierar sedan hela planen till urklipp.
  // Sätter ihop veckoplanens alla dagar till en enda text
  // och kopierar sedan hela planen till urklipp.
  const kopieraVeckoplan = () => {
    const veckoplanText = skapaVeckoplanText(veckoplan, veckostrategi);

    navigator.clipboard.writeText(veckoplanText);

    setVeckoplanKopierad(true);

    setTimeout(() => {
      setVeckoplanKopierad(false);
    }, 3000);
  };

  // Hämtar aktuellt veckonummer.

  const veckonummer = hamtaVeckonummer();

  // Sparar aktuell veckoplan
  const sparaVeckoplan = () => {
    const plan = {
      strategi: veckostrategi,
      plan: veckoplan,
    };

    setSparadVeckoplan(plan);

    localStorage.setItem("sparadVeckoplan", JSON.stringify(plan));
  };

  const taBortVeckoplan = () => {
    setSparadVeckoplan(null);

    localStorage.removeItem("sparadVeckoplan");
  };

  const sparaProfil = () => {
    const nyProfil = {
      foretag,
      typ,
      ton,
      plattform,
    };

    const existerandeProfil = profiler.find(
      (profil) => profil.foretag === foretag,
    );

    if (existerandeProfil) {
      const uppdateradeProfiler = profiler.map((profil) =>
        profil.foretag === foretag ? nyProfil : profil,
      );

      setProfiler(uppdateradeProfiler);

      localStorage.setItem("profiler", JSON.stringify(uppdateradeProfiler));

      alert("Profil uppdaterad ✅");
    } else {
      const nyaProfiler = [...profiler, nyProfil];

      setProfiler(nyaProfiler);

      localStorage.setItem("profiler", JSON.stringify(nyaProfiler));

      alert("Ny profil skapad ✅");
    }

    setProfil(nyProfil);
  };

  const laddaProfil = () => {
    if (!profil) return;

    setForetag(profil.foretag);
    setTyp(profil.typ);
    setTon(profil.ton);
    setPlattform(profil.plattform);

    setFokus("");

    setAktivProfil(profil.foretag);
  };

  const taBortProfil = () => {
    setProfil(null);

    setAktivProfil(null);

    localStorage.removeItem("profil");
  };

  const profilFinns = (foretagsnamn) => {
    return profiler.some((profil) => profil.foretag === foretagsnamn);
  };

  // ====================
  // RENDER
  // ====================
  return (
    <div className="app-container">
      <Header />
      {/* Snabbtest */}
      <QuickTest />
      {/* Företagsuppgifter */}

      <div className="content-wrapper">
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
          profil={profil}
          sparaProfil={sparaProfil}
          laddaProfil={laddaProfil}
          taBortProfil={taBortProfil}
          aktivProfil={aktivProfil}
        />

        <ProfileLibrary />

        <ButtonsSection
          skapaInlagg={skapaInlagg}
          skapaVeckoplan={skapaVeckoplan}
          skapaIde={skapaIde}
          rensaFormular={rensaFormular}
        />
      </div>
      {/* Resultat */}
      <ResultSection
        text={text}
        hashtags={hashtags}
        alternativ={alternativ}
        ide={ide}
        kopieraText={kopieraText}
        kopierat={kopierat}
        favoriter={favoriter}
        sparaFavorit={sparaFavorit}
        taBortFavorit={taBortFavorit}
        kopieraAlternativ={kopieraAlternativ}
        syfte={syfte}
        veckoplan={veckoplan}
        kopieraVeckoplan={kopieraVeckoplan}
        veckoplanKopierad={veckoplanKopierad}
        veckostrategi={veckostrategi}
        foretag={foretag}
        veckonummer={veckonummer}
        sparadVeckoplan={sparadVeckoplan}
        sparaVeckoplan={sparaVeckoplan}
        taBortVeckoplan={taBortVeckoplan}
      />

      <Footer />
    </div>
  );
}

export default App;
