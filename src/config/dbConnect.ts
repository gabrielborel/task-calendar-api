import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGO_DB_CONNECT!);

const database = mongoose.connection;

export default database;
