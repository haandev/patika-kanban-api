import { Router } from "@ooic/core";
const router = Router();

import * as board from "@/controller/board";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, board.create);
router.put("/:id",  auth.verifyToken, board.update);
router.get("/",  auth.verifyToken, board.get);
router.get("/:id",  auth.verifyToken, board.getById);
router.delete("/:id",  auth.verifyToken, board.destroy);

export default router;
