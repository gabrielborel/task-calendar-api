import express, { Express } from "express";
import userRoutes from "../routes/UserRoutes";
import tagRoutes from "../routes/TagRoutes";
import taskRoutes from "../routes/TaskRoutes";

const router = (app: Express) => {
  app.use(express.json(), userRoutes, tagRoutes, taskRoutes);
};

export default router;
