
import { zod } from "@ooic/core";
export const body = zod.object({
  title: zod.string(),
  boardId: zod.number(),
});
