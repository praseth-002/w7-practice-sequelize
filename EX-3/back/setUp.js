import sequelize from "./databases/database.js";
import Student from "./models/Student.js";
import Class from "./models/Class.js";
import Attendance from "./models/Attendance.js";

await sequelize.sync({ force: true }); // ⚠️ wipes everything, use only for setup!

const classA = await Class.create({ name: "Math 101" });
const classB = await Class.create({ name: "History 201" });

const s1 = await Student.create({ name: "Alice", classId: classA.id });
const s2 = await Student.create({ name: "Bob", classId: classA.id });
const s3 = await Student.create({ name: "Charlie", classId: classB.id });

// Optional: sample attendance
await Attendance.create({ studentId: s1.id, classId: classA.id, date: "2025-06-29", mark: "Present" });
await Attendance.create({ studentId: s2.id, classId: classA.id, date: "2025-06-29", mark: "Absent" });
await Attendance.create({ studentId: s3.id, classId: classB.id, date: "2025-06-29", mark: "Present" });

console.log("Sample data added.");
process.exit();
