import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("DB connected");
  } catch (error) {
    console.log("Connection error", error);
    throw error;
  }
};

export default DBConnect;
