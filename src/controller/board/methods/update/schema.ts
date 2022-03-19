
import { zod } from "@ooic/core";
export const body = zod.object({
  title: zod.string(),
  members: zod.array(zod.number()).optional()
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
