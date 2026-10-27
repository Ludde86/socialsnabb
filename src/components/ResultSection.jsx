import { useState } from "react";
import { syfteFarger } from "../data/syfteFarger";
import "./ResultSection.css";

function ResultSection({
  text,
  hashtags,
  alternativ,
  ide,
  kopieraText,
  kopierat,
  favorit,
  sparaFavorit,
  kopieraAlternativ,
  syfte,
  veckoplan,
  kopieraVeckoplan,
  veckoplanKopierad,
  veckostrategi,
  foretag,
  veckonummer,
  sparadVeckoplan,
  sparaVeckoplan,
}) {
  const [visaAlternativ, setVisaAlternativ] = useState(false);
  return (
    <>
      <h3 className="result-title">✨ Ditt färdiga inlägg</h3>

      <div className="result-container">
        {!text && (
          <>
            <div
              style={{
                fontSize: "48px",
                marginBottom: "10px",
              }}
            >
              ✨
            </div>

            <p
              style={{
                color: "#64748b",
                textAlign: "center",
                margin: 0,
              }}
            >
              Ditt inlägg kommer att visas här.
            </p>

            <p
              style={{
                color: "#cbd5e1",
                textAlign: "center",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              Fyll i företagsuppgifter och klicka på "Skapa mitt inlägg".
            </p>
          </>
        )}

        {text && <div className="syfte-label">Syfte: {syfte}</div>}

        {text && <div className="main-post">{text}</div>}

        {hashtags && (
          <div className="info-box info-box-blue">
            <strong>🏷️ Förslag på hashtags</strong>
            <p>{hashtags}</p>
          </div>
        )}

        {alternativ.length > 0 && (
          <div>
            <h3 className="section-title">🎯 Andra vinklar på samma inlägg</h3>

            <button
              onClick={() => setVisaAlternativ(!visaAlternativ)}
              className="copy-button"
            >
              {visaAlternativ ? "▼ Dölj alternativ" : "▶ Visa alternativ"}
            </button>

            {visaAlternativ &&
              alternativ.map((alt, index) => (
                <div
                  key={index}
                  style={{
                    padding: "16px",
                    marginTop: "12px",
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    textAlign: "left",
                    lineHeight: "1.7",
                  }}
                >
                  <strong>Alternativ {index + 1}</strong>

                  <p
                    style={{
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    {alt}
                  </p>

                  <button
                    onClick={() => kopieraAlternativ(alt)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #dbe2ea",
                      cursor: "pointer",
                    }}
                  >
                    📋 Kopiera detta alternativ
                  </button>
                </div>
              ))}
          </div>
        )}

        {ide && (
          <div className="info-box info-box-yellow">
            <strong>💡 Inläggsidé</strong>

            <p
              style={{
                marginTop: "10px",
                marginBottom: 0,
                lineHeight: "1.7",
              }}
            >
              {ide}
            </p>
          </div>
        )}

        {text && (
          <button onClick={kopieraText} className="button button-primary">
            {kopierat ? "✅ Kopierat!" : "📋 Kopiera inlägg"}
          </button>
        )}

        {text && (
          <button onClick={sparaFavorit} className="button button-success">
            ⭐ Spara som favorit
          </button>
        )}
      </div>

      {favorit && (
        <div className="info-box info-box-gold">
          <strong>⭐ Sparat favoritinlägg</strong>

          <p
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {favorit}
          </p>
        </div>
      )}

      {veckoplan.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#f8fafc",
            borderLeft: "5px solid #22c55e",
            borderRadius: "12px",
          }}
        >
          {veckostrategi && (
            <p
              style={{
                color: "#64748b",
                marginBottom: "15px",
                fontWeight: "600",
              }}
            >
              🎯 Strategi: {veckostrategi}
            </p>
          )}

          <p
            style={{
              marginBottom: "5px",
              color: "#64748b",
              fontWeight: "600",
            }}
          >
            📅 Vecka {veckonummer}
          </p>

          <h3
            style={{
              marginBottom: "5px",
              color: "#1e293b",
            }}
          >
            🏢 {foretag}
          </h3>
          <strong>📅 Veckoplan</strong>

          {veckoplan.map((post, index) => (
            <div key={index} className="week-card">
              <h4 className="day-title">📅 {post.dag}</h4>
              <p className="time-label">🕘 Rekommenderad tid: {post.tid}</p>
              <p
                className="syfte-title"
                style={{
                  color: syfteFarger[post.syfte] || "#1e293b",
                }}
              >
                {post.syfte}
              </p>
              <div className="card card-gray">
                <strong className="card-title">📝 Inlägg</strong>

                <p
                  style={{
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  {post.text}
                </p>
              </div>
              <div className="card card-blue">
                <strong className="card-title">📸 Bildidé</strong>

                <p
                  style={{
                    marginTop: "6px",
                    marginBottom: 0,
                  }}
                >
                  {post.bildIde}
                </p>
              </div>

              <div className="card card-yellow">
                <strong className="card-title">🎯 Mål</strong>

                <p
                  style={{
                    marginTop: "6px",
                    marginBottom: 0,
                  }}
                >
                  {post.mal}
                </p>
              </div>

              <button
                onClick={() =>
                  kopieraAlternativ(`
${post.dag.toUpperCase()}

🕘 ${post.tid}

${post.syfte}

📝 Inlägg:
${post.text}

📸 Bildidé:
${post.bildIde}

🎯 Mål:
${post.mal}
`)
                }
                className="copy-button"
              >
                📋 Kopiera detta inlägg
              </button>
            </div>
          ))}
          <button
            onClick={kopieraVeckoplan}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            {veckoplanKopierad
              ? "✅ Hela veckoplanen är kopierad!"
              : "📋 Kopiera hela veckoplanen"}
          </button>
          <button
            onClick={sparaVeckoplan}
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #dbe2ea",
              cursor: "pointer",
            }}
          >
            ⭐ Spara veckoplan
          </button>
        </div>
      )}
    </>
  );
}

export default ResultSection;
