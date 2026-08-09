
const con = require('../config/db')


// fetch all students
const getStudents = (req, res) => {
    const fetch_query = "SELECT * FROM students";

    con.query(fetch_query, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Database error",
                error: err.message
            });
        }

        res.status(200).json(result.rows);
    });
};

// fetch a student by its ID
const getStudentById = (req, res) => {
    const studentId = parseInt(req.params.id);
    const fetch_query = "SELECT * FROM students WHERE studentid = $1";

    con.query(fetch_query, [studentId], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(result.rows[0]);
    });
};
//Create a new Student
const createStudent = (req, res) => {

     const {
        first_name,
        last_name,
        date_of_birth,
        gender,
        email
    } = req.body;

    const insert_query = 'INSERT INTO students (first_name,last_name,date_of_birth,gender,email) VALUES($1,$2,$3,$4,$5) RETURNING *'
   con.query(insert_query,[first_name,
        last_name,
        date_of_birth,
        gender,
        email],(err,result)=>{
            if(err){

                 return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });
            }
            
            res.status(201).json({
                message: "Student created successfully",
                student: result.rows[0]
            });
        })
};

// Update student information
const updateStudent = (req, res) => {
    const studentId = parseInt(req.params.id);

    const {
        first_name,
        last_name,
        date_of_birth,
        gender,
        email
    } = req.body;

    const update_query = `
        UPDATE students
        SET first_name = $1,
            last_name = $2,
            date_of_birth = $3,
            gender = $4,
            email = $5
        WHERE studentid = $6
    `;

    con.query(
        update_query,
        [
            first_name,
            last_name,
            date_of_birth,
            gender,
            email,
            studentId
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });
            }

            if (result.rowCount === 0) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.status(200).json({
                message: "Student updated successfully"
            });
        }
    );
};

//Delete student from table
const deleteStudent = (req, res) => {

    const studentId = parseInt(req.params.id);

    const deleteQuery = 'Delete from students where studentid = $1'

    con.query(deleteQuery,[studentId],(err,result)=>{
        if (err) {
                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });
            }

            if (result.rowCount === 0) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.status(200).json({
                message: "Student deleted successfully"
            });
    })
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};