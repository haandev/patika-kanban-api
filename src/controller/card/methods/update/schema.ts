
import { zod } from "@ooic/core";
export const body = zod.object({
  title: zod.string().optional(),
  listId: zod.number().optional(),
  description: zod.string().optional(),
  duedate: zod.string().regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/).optional(),
  order:zod.number().optional()
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
