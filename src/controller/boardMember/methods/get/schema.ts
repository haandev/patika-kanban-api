import { zod } from "@ooic/core";
export const query = zod.object({
  boardId: zod.number().optional()
});