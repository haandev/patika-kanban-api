import { Router } from "@ooic/core";
const router = Router();

import * as checklist from "@/controller/checklist";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, checklist.create);
router.put("/:id",  auth.verifyToken, checklist.update);
router.delete("/:id",  auth.verifyToken, checklist.destroy);

export default router;
