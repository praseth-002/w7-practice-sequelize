// server.js
import Dotenv from "dotenv";
Dotenv.config();

import express from "express";
import cors from "cors";
import attendanceRoute from "./routes/attendanceRoute.js";

const app = express(); 

app.use(cors());
app.use(express.json());

app.use("/", attendanceRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
