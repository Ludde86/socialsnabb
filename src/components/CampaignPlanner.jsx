function CampaignPlanner({
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
