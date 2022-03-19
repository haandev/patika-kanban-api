
import { zod } from "@ooic/core";
export const body = zod.object({
  checklistId:zod.number(),
  isChecked:zod.boolean(),
  title:zod.string()
});
