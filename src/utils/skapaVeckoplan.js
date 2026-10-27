// Skapar en veckoplan med en balanserad mix av innehåll.

import { veckoplanPerForetag } from "../data/veckoplanPerForetag";
import { veckoplanMallar } from "../data/veckoplanMallar";
import { bildIdeerPerSyfte } from "../data/bildIdeerPerSyfte";
import { malPerSyfte } from "../data/malPerSyfte";
import { publiceringstider } from "../data/publiceringstider";

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

      bildIde:
        bildIdeerPerSyfte[valtSyfte] ||
        "Ta en relevant bild som passar inlägget.",

      mal: malPerSyfte[valtSyfte] || "Skapa relevant innehåll för målgruppen.",

      tid: publiceringstider[dag] || "12:00",
    };
  });

  return {
    strategi: valdStrategi.namn,
    plan,
  };
};
