import { useState } from "react";

function CampaignLibrary({ kampanjer, laddaKampanj, taBortKampanj }) {
  const [visaKampanjer, setVisaKampanjer] = useState(false);

  if (kampanjer.length === 0) {
    return null;
  }

  return (
    <div className="info-box info-box-yellow">
      <button
        onClick={() => setVisaKampanjer(!visaKampanjer)}
        className="copy-button"
      >
        {visaKampanjer
          ? "▼ Dölj kampanjbibliotek"
          : `▶ Visa kampanjbibliotek (${kampanjer.length})`}
      </button>

      {visaKampanjer && (
        <>
          {kampanjer.map((kampanj, index) => (
            <div key={index} className="week-card">
              <strong>🚀 {kampanj.namn}</strong>

              <p>Tema: {kampanj.tema}</p>

              <p>Längd: {kampanj.langd}</p>

              <p>Strategi: {kampanj.strategi}</p>
              <button
                onClick={() => laddaKampanj(kampanj)}
                className="button button-secondary"
              >
                📂 Ladda kampanj
              </button>
              <button
                onClick={() => taBortKampanj(kampanj.id)}
                className="button button-secondary"
              >
                🗑️ Ta bort kampanj
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CampaignLibrary;
