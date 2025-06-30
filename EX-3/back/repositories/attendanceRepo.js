import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";
import Class from "../models/Class.js";

export async function markAttendance({ studentId, classId, date, mark }) {
  return await Attendance.create({ studentId, classId, date, mark });
}

export async function getAttendanceByDate({ studentId, date }) {
  return await Attendance.findOne({
    where: { studentId, date },
    include: [Student, Class],
  });
}

export async function getClassAttendance(classId) {
  return await Attendance.findAll({
    where: { classId },
    include: [Student],
  });
}

export async function getStudentAttendanceSummary(studentId) {
  return await Attendance.findAll({
    where: { studentId },
    include: [Class],
    order: [["date", "DESC"]],
  });
}
