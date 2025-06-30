import { DataTypes } from "sequelize";
import sequelize from "../databases/database.js";
import Class from "./Class.js";

const Student = sequelize.define('Student', {
    name : {
        type : DataTypes.STRING,
    },
});

export default Student;

Student.belongsTo(Class);
Class.hasMany(Student);