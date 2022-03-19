import { Router } from "@ooic/core";
const router = Router();

import * as boardMember from "@/controller/boardMember";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, boardMember.create);
router.get("/",  auth.verifyToken, boardMember.get);
router.delete("/:id",  auth.verifyToken, boardMember.destroy);

export default router;
