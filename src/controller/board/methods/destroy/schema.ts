import { zod } from "@ooic/core";
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});