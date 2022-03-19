import { Router } from "@ooic/core";
const router = Router();

import * as checklistItem from "@/controller/checklistitem";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, checklistItem.create);
router.put("/:id",  auth.verifyToken, checklistItem.update);
router.delete("/:id",  auth.verifyToken, checklistItem.destroy);

export default router;
