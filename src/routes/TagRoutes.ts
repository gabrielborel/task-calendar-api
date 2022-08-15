import TagController from "../controllers/TagController";
import { Router } from "express";

const router = Router();

router.post("/tags", TagController.create);

export default router;
