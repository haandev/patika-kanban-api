import { zod } from "@ooic/core";
export const body = zod.object({
  username: zod.string(),
  password: zod.string(),
  passwordConfirm: zod.string(),
}).refine((data) => data.passwordConfirm === data.password, "Passwords don't match");
