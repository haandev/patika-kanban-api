
import { zod } from "@ooic/core";
export const body = zod.object({
  cardId: zod.number(),
  labelId: zod.number(),
});
