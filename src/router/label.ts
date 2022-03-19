import { Router } from "@ooic/core";
const router = Router();

import * as label from "@/controller/label";
import * as auth from "@/controller/auth";

router.get("/",  auth.verifyToken, label.get);

export default router;
