import { Request, Response } from "express";
import { CallbackError } from "mongoose";
import Tag from "../models/Tag";

export default class TagController {
  static async create(req: Request, res: Response) {
    const { name, color, userId } = req.body;

    const newTag = await Tag.create({ user: userId, name, color });
    newTag.save((err) => {
      if (err) {
        res.status(404).send({ err });
      }
    });

    res.status(201).send({ newTag });
  }

  static remove(req: Request, res: Response) {
    const { id } = req.params;

    Tag.findByIdAndDelete(id, (err: CallbackError) => {
      if (err) {
        res.status(500).send({ message: err.message });
      }
    });

    res.status(200).send({ message: "Tag removed successfully" });
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, color } = req.body;

    Tag.findByIdAndUpdate(id, { $set: { name, color } }, (err) => {
      if (err) {
        res.status(500).send({ err });
      }
    });

    res.status(200).send({ message: "Tag updated successfully" });
  }
}
