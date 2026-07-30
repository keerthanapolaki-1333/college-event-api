const studentService = require("../services/student.service");
const { successResponse } = require("../utils/apiResponse");

const getStudents = async (req, res, next) => {

    try {

        const students = await studentService.getAllStudents();

        res.status(200).json(
            successResponse(
                "Students retrieved successfully",
                students
            )
        );

    } catch (error) {
        next(error);
    }

};

const createStudent = async (req, res, next) => {

    try {

        const student = await studentService.createStudent(req.body);

        res.status(201).json(
            successResponse(
                "Student created successfully",
                student
            )
        );

    } catch (error) {
        next(error);
    }

};

module.exports = {
    getStudents,
    createStudent
};