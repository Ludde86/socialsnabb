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
}) {
  return (
    <>
      <h3
        style={{
          color: "#1e293b",
        }}
      >
        ✨ Ditt färdiga inlägg
      </h3>

      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "20px",
          minHeight: "80px",
        }}
      >
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

        {text && (
          <div
            style={{
              marginBottom: "10px",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Syfte: {syfte}
          </div>
        )}

        {text && (
          <div
            style={{
              marginTop: "20px",
              padding: "24px",
              backgroundColor: "white",
              borderLeft: "5px solid #2563eb",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              lineHeight: "1.8",
              fontSize: "16px",
              textAlign: "left",
              whiteSpace: "pre-line",
            }}
          >
            {text}
          </div>
        )}

        {hashtags && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#eff6ff",
              borderLeft: "5px solid #60a5fa",
              borderRadius: "12px",
            }}
          >
            <strong>🏷️ Förslag på hashtags</strong>
            <p>{hashtags}</p>
          </div>
        )}

        {alternativ.length > 0 && (
          <div>
            <h3>🎯 Andra vinklar på samma inlägg</h3>

            {alternativ.map((alt, index) => (
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
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#fff8e7",
              borderLeft: "5px solid #f59e0b",
              borderRadius: "12px",
            }}
          >
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
          <button
            onClick={kopieraText}
            style={{
              marginTop: "20px",
              width: "100%",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            {kopierat ? "✅ Kopierat!" : "📋 Kopiera inlägg"}
          </button>
        )}

        {text && (
          <button
            onClick={sparaFavorit}
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #dbe2ea",
              cursor: "pointer",
            }}
          >
            ⭐ Spara som favorit
          </button>
        )}
      </div>

      {favorit && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#fefce8",
            borderLeft: "5px solid #eab308",
            borderRadius: "12px",
          }}
        >
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
          <strong>📅 Veckoplan</strong>

          {veckoplan.map((post, index) => (
            <div
              key={index}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <strong>{post.dag}</strong>

              <p>{post.syfte}</p>

              <p>{post.text}</p>

              <button
                onClick={() => kopieraAlternativ(post.text)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid #dbe2ea",
                  cursor: "pointer",
                }}
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
        </div>
      )}
    </>
  );
}

export default ResultSection;
