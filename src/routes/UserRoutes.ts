import UserController from "../controllers/UserController";
import { Router } from "express";

const router = Router();

router.post("/users", UserController.create);

export default router;
