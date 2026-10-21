// Skapar ett riktigt inlägg till veckoplanen.
// Företagstypen väljer rätt samling och syftet väljer rätt textlista.

import { syftenPerForetag } from "../data/syftenPerForetag";

export const skapaVeckoText = (valtSyfte, typ, foretag, fokus) => {
  // Hämta alla syftestexter för vald företagstyp.
  const foretagetsSyften = syftenPerForetag[typ];

  // Om företagstypen ännu saknar egna syftestexter,
  // använder vi en enkel reservtext.
  if (!foretagetsSyften) {
    return fokus
      ? `Berätta om ${fokus} hos ${foretag}.`
      : `Berätta något intressant om ${foretag}.`;
  }

  // Hämta listan med texter för veckodagens syfte.
  const syfteTexter = foretagetsSyften[valtSyfte];

  // Om syftet saknar texter använder vi också reservtexten.
  if (!syfteTexter || syfteTexter.length === 0) {
    return fokus
      ? `Berätta om ${fokus} hos ${foretag}.`
      : `Berätta något intressant om ${foretag}.`;
  }

  // Slumpa fram en text eller textfunktion från listan.
  const slumpadText =
    syfteTexter[Math.floor(Math.random() * syfteTexter.length)];

  // En funktionsmall kan använda företagsnamn och fokus.
  if (typeof slumpadText === "function") {
    return slumpadText(foretag, fokus);
  }

  // En vanlig textmall kan returneras direkt.
  return slumpadText;
};
