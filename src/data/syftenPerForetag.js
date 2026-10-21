import { pizzeriaSyften } from "./pizzeriaSyften";
import { frisorSyften } from "./frisorSyften";
import { gymSyften } from "./gymSyften";

// Kopplar varje företagstyp till rätt samling av syftestexter.
// Det gör att appen kan öppna rätt "låda" med hjälp av företagstypen.
export const syftenPerForetag = {
  Pizzeria: pizzeriaSyften,
  Frisör: frisorSyften,
  Gym: gymSyften,
};
