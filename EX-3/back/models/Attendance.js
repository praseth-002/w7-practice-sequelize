import { DataTypes } from "sequelize";
import sequelize from "../databases/database.js";
import Student from "./Student.js";
import Class from "./Class.js";

const Attendance = sequelize.define('Attendance', {
    date : {
        type : DataTypes.DATE,
    },
    mark : {
        type : DataTypes.ENUM("Present", "Absent")
    },
});

export default Attendance;

Attendance.belongsTo(Student);
Student.hasMany(Attendance);

Attendance.belongsTo(Class);
Class.hasMany(Attendance);