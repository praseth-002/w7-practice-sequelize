import { Sequelize } from "sequelize"
import Dotenv from "dotenv"

Dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
    }
);

export default sequelize; //this one actually will link it in server.js
// module.exports = sequelize //this one doesnt link in server.js basically a new instance of sequelize in server.js instead of the one in here