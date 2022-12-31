import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import bodyParser from "body-parser";
import path from "path";
import { PostRouter } from "./routers/articles.js";

// Server Configuration
const PORT = process.env.PORT || 3050;
const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(bodyParser.json());

// Database Configuration
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.log(err);
  }
};
connectToDB();

app.use("/api", PostRouter);

const __dirname = path.resolve();
if (process.env.NODE_ENV == "production") {
  app.use(express.static(`${__dirname}/client/build`));
  app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

httpServer.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
