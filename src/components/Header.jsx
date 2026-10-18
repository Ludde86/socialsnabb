function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "42px" }}>🚀</span>

        <h1
          style={{
            margin: 0,
            fontSize: "56px",
          }}
        >
          SocialSnabb
        </h1>
      </div>

      <p
        style={{
          fontSize: "22px",
          fontWeight: "600",
          lineHeight: "1.4",
          marginBottom: "10px",
          color: "#1e293b",
        }}
      >
        Skapa färdiga sociala medier-inlägg för småföretag på några sekunder.
      </p>

      <p
        style={{
          color: "#64748b",
          marginTop: 0,
        }}
      >
        Generera text, hashtags och nya innehållsidéer med ett klick.
      </p>
    </>
  );
}

export default Header;
