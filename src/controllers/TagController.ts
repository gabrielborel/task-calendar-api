import { Request, Response } from "express";
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
}
