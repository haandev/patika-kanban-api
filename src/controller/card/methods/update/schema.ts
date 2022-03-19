
import { zod } from "@ooic/core";
export const body = zod.object({
  title: zod.string().optional(),
  listId: zod.number().optional(),
  description: zod.string().optional(),
  duedate: zod.date().optional(),
  order:zod.number().optional()
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
