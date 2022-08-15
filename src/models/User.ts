import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
