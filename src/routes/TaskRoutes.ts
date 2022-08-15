import TaskController from "../controllers/TaskController";
import { Router } from "express";

const router = Router();

router
  .get("/tasks/:userId", TaskController.listAllByUserId)
  .post("/tasks", TaskController.create)
  .put("/tasks/:id", TaskController.update)
  .delete("/tasks/:id", TaskController.remove);

export default router;
