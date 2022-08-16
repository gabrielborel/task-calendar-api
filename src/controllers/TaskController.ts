import { CallbackError } from "mongoose";
import { Request, Response } from "express";
import Task from "../models/Task";

export default class TaskController {
  static async listAllByUserId(req: Request, res: Response) {
    const { userId } = req.params;

    const tasks = await Task.find({ user: userId });

    res.status(200).send({ tasks });
  }

  static async create(req: Request, res: Response) {
    const newTask = await Task.create(req.body);

    newTask.save((err) => {
      if (err) {
        res.status(500).send({ message: `Error on creating task - err ${err}` });
      }
    });

    res.status(201).send({ newTask });
  }

  static remove(req: Request, res: Response) {
    const { id } = req.params;

    Task.findByIdAndDelete(id, (err: CallbackError) => {
      if (err) {
        res.status(500).send({ message: err.message });
      }

      res.status(200).send({ message: "Task removed successfully" });
    });
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;

    Task.findByIdAndUpdate(id, { $set: req.body }, async (err: CallbackError) => {
      if (err) {
        res.status(500).send({ err });
      }

      const task = await Task.findById(id);
      res.status(200).send({ message: "Task updated successfully", task });
    });
  }
}
