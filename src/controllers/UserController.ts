import { Request, Response } from "express";
import User from "../models/User";

export default class UserController {
  static async create(req: Request, res: Response) {
    const { name, email, avatar } = req.body;

    const savedUsers = await User.find();
    const emailAlreadyExists = savedUsers.some((savedUser) => savedUser.email === email);

    if (emailAlreadyExists) {
      res.status(200).send({
        message: "An account with this email already exists",
        newUser: savedUsers.find((savedUser) => savedUser.email === email),
      });
    } else {
      const newUser = await User.create({ name, email, avatar });
      newUser.save((err) => {
        if (err) {
          res.status(400).send({ err });
        }
      });

      res.status(201).send({ newUser });
    }
  }
}
