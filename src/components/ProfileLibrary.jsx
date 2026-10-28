import { useState } from "react";
import "./ProfileLibrary.css";

function ProfileLibrary({
  profiler,
  aktivProfil,
  laddaProfilFranBibliotek,
  taBortProfilFranBibliotek,
}) {
  const [visaProfiler, setVisaProfiler] = useState(false);

  if (profiler.length === 0) {
    return null;
  }

  return (
    <div className="info-box info-box-blue">
      <button
        onClick={() => setVisaProfiler(!visaProfiler)}
        className="copy-button"
      >
        {visaProfiler
          ? "▼ Dölj profilbibliotek"
          : `▶ Visa profilbibliotek (${profiler.length})`}
      </button>

      {visaProfiler && (
        <>
          {profiler.map((profil, index) => (
            <div
              key={index}
              className={`week-card ${
                aktivProfil === profil.foretag ? "active-profile" : ""
              }`}
            >
              <strong>🏢 {profil.foretag}</strong>

              {aktivProfil === profil.foretag && <p>✅ Aktiv profil</p>}

              <p>Typ: {profil.typ}</p>

              <p>Ton: {profil.ton}</p>

              <p>Plattform: {profil.plattform}</p>

              <button
                onClick={() => laddaProfilFranBibliotek(profil)}
                className="button button-secondary"
              >
                📂 Ladda profil
              </button>
              <button
                onClick={() => taBortProfilFranBibliotek(profil.foretag)}
                className="button button-secondary"
              >
                🗑️ Ta bort profil
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ProfileLibrary;
