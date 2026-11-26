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

      {typ === "Pizzeria" && (
        <>
          <p>🍕 Snabbval för pizzeria</p>
          <div className="quick-actions">
            <button type="button" onClick={() => setTema("Veckans pizza - ")}>
              🍕 Veckans pizza
            </button>

            <button type="button" onClick={() => setTema("Dagens lunch - ")}>
              🥗 Dagens lunch
            </button>

            <button type="button" onClick={() => setTema("Familjepaket - ")}>
              👨‍👩‍👧 Familjepaket
            </button>

            <button type="button" onClick={() => setTema("Matchkväll - ")}>
              ⚽ Matchkväll
            </button>

            <button type="button" onClick={() => setTema("Ny meny - ")}>
              🔥 Ny meny
            </button>
          </div>
        </>
      )}

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
