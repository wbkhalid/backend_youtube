import "dotenv/config";
import DBConnect from "./db/index.js";
import express from "express";

const app = express();

DBConnect()
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`App is listing on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(`Mongodb connection error ${error}`));
