function ButtonsSection({
  skapaInlagg,
  skapaVeckoplan,
  skapaIde,
  rensaFormular,
}) {
  return (
    <div className="action-panel">
      <div className="action-buttons">
        <button onClick={skapaInlagg} className="button button-primary">
          🚀 Skapa mitt inlägg
        </button>

        <button onClick={skapaInlagg} className="button button-secondary">
          🎲 Slumpa nytt inlägg
        </button>

        <button onClick={skapaVeckoplan} className="button button-secondary">
          📅 Skapa veckoplan
        </button>

        <button onClick={skapaIde} className="button button-secondary">
          💡 Ge mig en idé
        </button>

        <button onClick={rensaFormular} className="button button-secondary">
          🔄 Börja om
        </button>
      </div>
    </div>
  );
}

export default ButtonsSection;
