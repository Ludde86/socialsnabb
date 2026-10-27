import "./InputSection.css";

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
    <div className="form-section">
      {/* Företagsnamn och fokus */}

      <h3 className="form-section-title">📝 Företagsuppgifter</h3>

      <p className="form-section-description">
        Fyll i företagets uppgifter och välj hur inlägget ska genereras.
      </p>

      <label className="form-label">Företagsnamn</label>

      <input
        type="text"
        placeholder="Skriv företagsnamn"
        value={foretag}
        onChange={(e) => setForetag(e.target.value)}
        className="form-input"
      />

      <label className="form-label form-input-spaced">
        🎯 Vad vill du lyfta fram i inlägget?
      </label>

      <input
        type="text"
        placeholder="Exempel: Vesuvio, Luncherbjudande, Fredagspizza eller Ny meny"
        value={fokus}
        onChange={(e) => setFokus(e.target.value)}
        className="form-input"
      />

      {/* Inställningar för generering */}
      <label className="form-label-section">Inställningar</label>

      <div className="select-grid">
        <select
          value={typ}
          onChange={(e) => setTyp(e.target.value)}
          className="form-select"
        >
          {foretagstyper.map((typNamn) => (
            <option key={typNamn}>{typNamn}</option>
          ))}
        </select>
      </div>

      <div className="select-grid">
        <select
          value={ton}
          onChange={(e) => setTon(e.target.value)}
          className="form-select"
        >
          {tonlagen.map((tonNamn) => (
            <option key={tonNamn}>{tonNamn}</option>
          ))}
        </select>
      </div>

      <label className="form-label-large">
        🎯 Vad vill du uppnå med inlägget?
      </label>

      <p className="helper-text">
        Välj målet med inlägget så skapar SocialSnabb ett bättre förslag.
      </p>

      <div className="select-grid">
        <select
          value={syfte}
          onChange={(e) => setSyfte(e.target.value)}
          className="form-select"
        >
          {syften.map((syfteNamn) => (
            <option key={syfteNamn}>{syfteNamn}</option>
          ))}
        </select>
      </div>

      <div className="select-grid">
        <select
          value={plattform}
          onChange={(e) => setPlattform(e.target.value)}
          className="form-select"
        >
          {plattformar.map((plattformNamn) => (
            <option key={plattformNamn}>{plattformNamn}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputSection;
