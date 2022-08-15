import express, { Express } from "express";
import userRoutes from "../routes/UserRoutes";
import tagRoutes from "../routes/TagRoutes";

const router = (app: Express) => {
  app.use(express.json(), userRoutes, tagRoutes);
};

export default router;
