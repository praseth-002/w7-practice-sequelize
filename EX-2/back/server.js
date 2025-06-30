// console.log("server is totally running")

// import sequelize from "./db/database.js"

// try {
//     await sequelize.authenticate();
//     console.log("SUCCESS");
// } catch (error) {
//     console.error("ERROR", error)
// }

import sequelize from "./db/database.js";

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("SUCCESS");
  } catch (error) {
    console.error("ERROR", error);
  }
};

start();
