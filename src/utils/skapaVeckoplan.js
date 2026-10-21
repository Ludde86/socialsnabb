// Skapar en varierad veckoplan med tre olika syften.
// Syftena blandas så att varje plan blir lite annorlunda.

export const skapaVeckoplanData = (syften, skapaVeckoText) => {
  const dagar = ["Måndag", "Onsdag", "Fredag"];

  // Skapa en kopia och blanda ordningen.
  const blandadeSyften = [...syften].sort(() => Math.random() - 0.5);

  // Välj tre syften.
  const valdaSyften = blandadeSyften.slice(0, 3);

  // Skapa veckoplanen.
  return dagar.map((dag, index) => {
    const valtSyfte = valdaSyften[index];

    return {
      dag,
      syfte: valtSyfte,
      text: skapaVeckoText(valtSyfte),
    };
  });
};
