import { syftenPerForetag } from "../data/syftenPerForetag";

// Hämtar en slumpad syftestext för vald företagstyp.
//
// Om företagstypen saknar egna syftestexter
// returneras huvudinlägget som reservtext.
export const hamtaSyfteText = ({ typ, syfte, foretag, fokus, reservtext }) => {
  // Hämta samlingen med syften för vald företagstyp.
  const foretagetsSyften = syftenPerForetag[typ];

  // Använd huvudinlägget om företagstypen
  // ännu saknar egna syftestexter.
  if (!foretagetsSyften) {
    return reservtext;
  }

  // Hämta texterna för användarens valda syfte.
  const syfteTexter = foretagetsSyften[syfte];

  // Använd huvudinlägget om valt syfte saknar texter.
  if (!syfteTexter || syfteTexter.length === 0) {
    return reservtext;
  }

  // Slumpa fram en vanlig text eller en textfunktion.
  const slumpadText =
    syfteTexter[Math.floor(Math.random() * syfteTexter.length)];

  // En textfunktion kan använda företagsnamn och fokus.
  if (typeof slumpadText === "function") {
    return slumpadText(foretag, fokus);
  }

  // En vanlig text returneras direkt.
  return slumpadText;
};
