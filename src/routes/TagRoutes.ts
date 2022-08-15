import TagController from "../controllers/TagController";
import { Router } from "express";

const router = Router();

router
  .get("/tags/:userId", TagController.listAllByUserId)
  .post("/tags", TagController.create)
  .delete("/tags/:id", TagController.remove)
  .put("/tags/:id", TagController.update);

export default router;
