import mongoose from "mongoose";
import { IUser } from "./User";

export interface ITag {
  name: string;
  color: string;
  user: IUser;
}

const tagSchema = new mongoose.Schema<ITag>({
  name: { type: String, required: true },
  color: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
