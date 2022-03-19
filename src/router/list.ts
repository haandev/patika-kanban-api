import { Router } from "@ooic/core";
const router = Router();

import * as list from "@/controller/list";
import * as auth from "@/controller/auth";

router.post("/", auth.verifyToken, list.create);
router.put("/:id", auth.verifyToken, list.update);
router.get("/", auth.verifyToken, list.get);
router.get("/:id", auth.verifyToken, list.getById);
router.delete("/:id", auth.verifyToken, list.destroy);

export default router;
