const express = require("express");
const { validateStudent, validateStudentId } = require('../middlewares/validateStudent');
const router = express.Router();

const {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

router.get("/", getStudents);

router.get("/:id",validateStudentId, getStudentById);

router.post("/",validateStudent, createStudent);

router.put("/:id",validateStudentId,validateStudent,updateStudent);

router.delete("/:id",validateStudentId, deleteStudent);

module.exports = router;