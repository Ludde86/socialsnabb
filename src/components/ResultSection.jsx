function ResultSection({ text, hashtags, alternativ, ide, kopieraText }) {
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
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#f3f3f3",
              borderRadius: "8px",
            }}
          >
            {text}
          </div>
        )}

        {hashtags && (
          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              backgroundColor: "#eef6ff",
              borderRadius: "8px",
            }}
          >
            <strong>Hashtags:</strong>
            <p>{hashtags}</p>
          </div>
        )}

        {alternativ.length > 0 && (
          <div>
            <h3>Alternativa versioner</h3>

            {alternativ.map((alt, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  marginTop: "10px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "8px",
                }}
              >
                {alt}
              </div>
            ))}
          </div>
        )}

        {ide && (
          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              backgroundColor: "#fff8e7",
              borderRadius: "8px",
            }}
          >
            <strong>Inläggsidé:</strong>
            <p>{ide}</p>
          </div>
        )}

        {text && (
          <button
            onClick={kopieraText}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Kopiera inlägg
          </button>
        )}
      </div>
    </>
  );
}

export default ResultSection;
