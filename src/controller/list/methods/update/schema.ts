
import { zod } from "@ooic/core";
export const body = zod.object({
  title: zod.string().optional(),
  boardId: zod.number().optional(),
  order:zod.number().optional()
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
