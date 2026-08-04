const express = require('express')

const route = express.Router()

const students = [{
        id: 1,
        name: 'Jamie'
    },
    {
        id: 2,
        name:'Peter'
    }]
route.get('/',(req,res) =>{
    res.json(students)
})

route.get("/:id", (req, res) => {
    const studentId = parseInt(req.params.id);

    const student = students.find(student => student.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

module.exports = route