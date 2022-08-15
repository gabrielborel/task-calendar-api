import mongoose from "mongoose";
import { ITag } from "./Tag";
import { ITask } from "./Task";

export interface IUser {
  name: string;
  email: string;
  avatar?: string;
  tasks?: ITask[];
  tags?: ITag[];
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
