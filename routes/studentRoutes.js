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

route.post("/",(req,res) =>{
   
    if(!req.body.name){
        return res.status(400).json({
            message : "Please enter a student name"
        })
    }
   
    const student = {
        id : students.length + 1,
        name: req.body.name
    }
    students.push(student)
    res.status(201).json(student);
})


route.put("/:id",(req,res) =>{
    const studentId = parseInt(req.params.id);

    const student = students.find(student => student.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if(!req.body.name){
        return res.status(400).json({
            message : "Please enter a student name"
        })
    }

    student.name = req.body.name;
    res.status(200).json(student);
})


route.delete("/:id",(req,res) =>{
    const studentId = parseInt(req.params.id);

    const student = students.find(student => student.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const index = students.indexOf(student)
    students.splice(index,1)

    res.status(200).json(student)
})

module.exports = route