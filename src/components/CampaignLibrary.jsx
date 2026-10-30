import { useState } from "react";

function CampaignLibrary({ kampanjer }) {
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
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CampaignLibrary;
