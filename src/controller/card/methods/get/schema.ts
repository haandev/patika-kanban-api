import { zod } from "@ooic/core";
export const query = zod.object({
  listId: zod.number().optional()
});