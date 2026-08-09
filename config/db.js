const {Client} = require('pg')

require('dotenv').config()

const con = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

con.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection failed:', err))

module.exports = con