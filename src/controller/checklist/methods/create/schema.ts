
import { zod } from "@ooic/core";
export const body = zod.object({
  cardId: zod.number(),
  title: zod.string(),
});
