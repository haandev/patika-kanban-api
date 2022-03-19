import { Router } from "@ooic/core";
const router = Router();

import * as card from "@/controller/card";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, card.create);
router.put("/:id",  auth.verifyToken, card.update);
router.get("/",  auth.verifyToken, card.get);
router.get("/:id",  auth.verifyToken, card.getById);
router.delete("/:id",  auth.verifyToken, card.destroy);

export default router;
