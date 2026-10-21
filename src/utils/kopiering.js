// Kopierar valfri text till urklipp
// och visar en tillfällig bekräftelse.
export const kopieraTillUrklipp = (text, setKopierat) => {
  navigator.clipboard.writeText(text);

  setKopierat(true);

  setTimeout(() => {
    setKopierat(false);
  }, 3000);
};
