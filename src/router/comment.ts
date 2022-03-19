import { Router } from "@ooic/core";
const router = Router();

import * as comment from "@/controller/comment";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, comment.create);
router.delete("/:id",  auth.verifyToken, comment.destroy);

export default router;
