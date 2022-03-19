
import { zod } from "@ooic/core";
export const body = zod.object({
  username: zod.string(),
  boardId: zod.number(),
});
