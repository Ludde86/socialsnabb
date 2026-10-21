function InputSection({
  foretag,
  setForetag,
  fokus,
  setFokus,
  typ,
  setTyp,
  ton,
  setTon,
  syfte,
  setSyfte,
  plattform,
  setPlattform,
  foretagstyper,
  tonlagen,
  syften,
  plattformar,
}) {
  return (
    <>
      {/* Företagsnamn och fokus */}
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

      {/* Inställningar för generering */}
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

      <select
        value={syfte}
        onChange={(e) => setSyfte(e.target.value)}
        style={{
          marginRight: "10px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
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
    </>
  );
}

export default InputSection;
