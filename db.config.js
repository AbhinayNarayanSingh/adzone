import mongoose, { mongo } from "mongoose";
import { DB_URI } from "./Environment";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(DB_URI);
};

export default dbConnect;