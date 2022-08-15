import mongoose from "mongoose";
import { IUser } from "./User";

export interface ITag {
  name: string;
  color: string;
  user: IUser;
}

const tagSchema = new mongoose.Schema<ITag>({
  name: { type: String },
  color: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
