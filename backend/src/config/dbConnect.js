import mongoose from "mongoose";
import * as dontenv from "dotenv";

dontenv.config();

const connect = async () => {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0ujlzjd.mongodb.net/${process.env.DB_TABLE}`;

  try {
    await mongoose.connect(url);
    console.log("Connected to the database");
  } catch (err) {
    console.error(`Error connecting to the database. n${err}`);
  }
};

export default connect;
