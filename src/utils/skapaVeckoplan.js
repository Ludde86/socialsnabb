// Skapar en veckoplan med en balanserad mix av innehåll.

import { veckoplanPerForetag } from "../data/veckoplanPerForetag";
import { veckoplanMallar } from "../data/veckoplanMallar";

export const skapaVeckoplanData = (skapaVeckoText, typ, foretag, fokus) => {
  const dagar = ["Måndag", "Onsdag", "Fredag"];

  // Hämta strategier för vald företagstyp.
  const foretagetsStrategier = veckoplanPerForetag[typ];

  // Om företagstypen saknar egna strategier
  // används de generella veckomallarna.
  const strategier = foretagetsStrategier || veckoplanMallar;

  // Slumpa fram en strategi.
  const valdStrategi =
    strategier[Math.floor(Math.random() * strategier.length)];

  const plan = dagar.map((dag, index) => {
    const valtSyfte = valdStrategi.syften[index];

    return {
      dag,
      syfte: valtSyfte,
      text: skapaVeckoText(valtSyfte, typ, foretag, fokus),
    };
  });

  return {
    strategi: valdStrategi.namn,
    plan,
  };
};
