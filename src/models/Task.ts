import mongoose from "mongoose";
import { ITag } from "./Tag";
import { IUser } from "./User";

export interface ITask {
  title: string;
  description: string;
  date: string;
  time?: string;
  duration?: string;
  user: IUser;
  tags?: ITag[];
}

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  duration: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
