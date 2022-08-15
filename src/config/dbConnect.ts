import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://gabrielborel:bielborel19@cluster0.weeym3z.mongodb.net/task-calendar?retryWrites=true&w=majority"
);

const database = mongoose.connection;

export default database;
