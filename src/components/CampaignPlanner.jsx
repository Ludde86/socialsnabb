import { kampanjForslag } from "../data/kampanjForslag";

function CampaignPlanner({
  typ,
  tema,
  setTema,
  erbjudande,
  setErbjudande,
  langd,
  setLangd,
  genereraKampanj,
}) {
  return (
    <div className="form-section">
      <h3>🚀 AI-kampanjplanerare</h3>

      <label>🎯 Vad handlar kampanjen om?</label>

      {kampanjForslag[typ]?.map((forslag) => {
        const arObjekt = typeof forslag === "object";

        const label = arObjekt ? forslag.label : forslag;

        const prefill = arObjekt
          ? forslag.prefill
          : forslag.replace(/^[^\s]+\s/, "") + " - ";

        const key = arObjekt ? forslag.id : forslag;

        return (
          <button
            key={key}
            type="button"
            onClick={() => setTema(prefill)}
            className="button button-secondary"
          >
            {label}
          </button>
        );
      })}

      <input
        type="text"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Julkampanj"
        className="form-input"
      />

      <label>💰 Erbjudande / mål</label>

      <input
        type="text"
        value={erbjudande}
        onChange={(e) => setErbjudande(e.target.value)}
        placeholder="15% rabatt på julbord"
        className="form-input"
      />

      <label>📅 Kampanjlängd</label>

      <select
        value={langd}
        onChange={(e) => setLangd(e.target.value)}
        className="form-select"
      >
        <option>3 dagar</option>
        <option>1 vecka</option>
        <option>2 veckor</option>
      </select>

      <button onClick={genereraKampanj} className="button button-primary">
        🚀 Generera kampanj
      </button>
    </div>
  );
}

export default CampaignPlanner;
