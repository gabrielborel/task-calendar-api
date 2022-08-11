import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  date: { type: Date },
  time: { type: String },
  duration: { type: String },
  tags: [{ name: String }],
});

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;
