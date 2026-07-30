const db = require("../config/db");

const getAllStudents = async () => {
    const [students] = await db.execute(
        `SELECT StudentID, Name, Email, Department, Semester FROM Students`
    );

    return students;
};

const createStudent = async (studentData) => {

    const { name, email, department, semester } = studentData;

    const [result] = await db.execute(
        `INSERT INTO Students(Name,Email,Department,Semester)
         VALUES(?,?,?,?)`,
        [name, email, department, semester]
    );

    return {
        studentId: result.insertId,
        name,
        email,
        department,
        semester
    };
};

module.exports = {
    getAllStudents,
    createStudent
};