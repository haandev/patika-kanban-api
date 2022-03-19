
import { zod } from "@ooic/core";
export const body = zod.object({
  isChecked: zod.boolean().optional(),
  title: zod.string().optional(),
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});