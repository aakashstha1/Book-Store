import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./Routes/route.js";
const app = express();
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.URI;
app.use(express.json());

//Connect to Mongo DB

try {
  mongoose.connect(URI);
  console.log("Connected to Mongo DB");
} catch (error) {
  console.log("Error:", error);
}

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
