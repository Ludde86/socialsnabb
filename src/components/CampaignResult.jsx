function CampaignResult({ kampanj, sparaKampanj }) {
  if (!kampanj) {
    return null;
  }

  return (
    <div className="info-box info-box-blue">
      <h2>🚀 {kampanj.namn}</h2>

      <p>
        <strong>Strategi:</strong> {kampanj.strategi}
      </p>

      {kampanj.inlagg.map((inlagg) => (
        <div key={inlagg.id} className="week-card">
          <h3>📅 {inlagg.dag}</h3>

          <p>
            <strong>{inlagg.steg}</strong>
          </p>

          <div className="card card-blue">
            <strong>📸 Bildidé</strong>

            <p>{inlagg.bildIde}</p>
          </div>

          <div className="card card-gray">
            <strong>📝 Inlägg</strong>

            <p>{inlagg.text}</p>
          </div>

          <button className="copy-button">📋 Kopiera text</button>

          <button className="button button-secondary">
            ⭐ Spara som favorit
          </button>

          <input
            type="text"
            value={kampanj.namn}
            readOnly
            className="form-input"
          />
          <button onClick={sparaKampanj} className="button button-success">
            📁 Spara hela kampanjen
          </button>
        </div>
      ))}
    </div>
  );
}

export default CampaignResult;
