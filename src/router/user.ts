import { Router } from "@ooic/core";
const router = Router();

import * as user from "@/controller/user";
import * as auth from "@/controller/auth";

router.get("/",  auth.verifyToken, user.get);

export default router;
