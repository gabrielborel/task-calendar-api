import express, { Express } from "express";
import userRoutes from "../routes/UserRoutes";
import tagRoutes from "../routes/TagRoutes";
import taskRoutes from "../routes/TaskRoutes";
import cors from "cors";

const router = (app: Express) => {
  app.use(cors(), express.json(), userRoutes, tagRoutes, taskRoutes);
};

export default router;
