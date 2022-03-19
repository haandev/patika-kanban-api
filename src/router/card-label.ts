import { Router } from "@ooic/core";
const router = Router();

import * as cardLabel from "@/controller/cardLabel";
import * as auth from "@/controller/auth";

router.post("/",  auth.verifyToken, cardLabel.create);
router.delete("/:id",  auth.verifyToken, cardLabel.destroy);

export default router;
