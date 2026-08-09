const express = require('express')
const app = express()
app.use(express.json());
const methodLogger = require('./middlewares/logger')
const studentRouter = require('./routes/studentRoutes')
require('dotenv').config()

app.use(methodLogger)

const PORT = process.env.PORT || 8800
app.get('/',(req,res) =>{
    res.send('Hello world')
})

app.use('/students',studentRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})