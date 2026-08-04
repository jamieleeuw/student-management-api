const express = require('express')

const app = express()

app.get('/',(req,res) =>{
    res.send('Hello world')
})

const studentRouter = require('./routes/studentRoutes')

app.use('/students',studentRouter)

app.listen(8800)