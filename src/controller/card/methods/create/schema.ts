
import { zod } from "@ooic/core";
export const body = zod.object({
  title: zod.string(),
  listId: zod.number(),
  description: zod.string().optional(),
  duedate: zod.date().optional(),
  order:zod.number().optional()
});
