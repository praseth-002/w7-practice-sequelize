import { DataTypes } from "sequelize";
import sequelize from "../databases/database.js";

const Author = sequelize.define('Author', {
    name : {
        type : DataTypes.STRING,
    },
    birthYear : {
        type : DataTypes.INTEGER,
    },
});

export default Author;