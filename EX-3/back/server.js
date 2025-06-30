// import sequelize from "./databases/database.js";

// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("SUCCESS");
//   } catch (error) {
//     console.error("ERROR", error);
//   }
// };

// start();

import express from "express";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const app = express();
app.use(express.json());
app.use("/", attendanceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
