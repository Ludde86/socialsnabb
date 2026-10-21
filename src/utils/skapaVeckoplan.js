// Skapar en veckoplan med en balanserad mix av innehåll.
//
// Målet är att:
// 1. Skapa engagemang
// 2. Bygga förtroende
// 3. Avsluta veckan med försäljning

import { veckoplanMallar } from "../data/veckoplanMallar";

export const skapaVeckoplanData = (skapaVeckoText, typ, foretag, fokus) => {
  const dagar = ["Måndag", "Onsdag", "Fredag"];

  // Slumpa fram en färdig veckostrategi.
  const valdStrategi =
    veckoplanMallar[Math.floor(Math.random() * veckoplanMallar.length)];

  const plan = dagar.map((dag, index) => {
    const valtSyfte = valdStrategi.syften[index];

    return {
      dag,
      syfte: valtSyfte,
      text: skapaVeckoText(valtSyfte, typ, foretag, fokus),
    };
  });

  // Returnera både strateginamn
  // och den färdiga planen.
  return {
    strategi: valdStrategi.namn,
    plan,
  };
};
