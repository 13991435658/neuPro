const mysql2 = require('mysql2/promise')
const db = mysql2.createPool({
    user:'572588831',
    password:'rgq572588831',
    host:'localhost',
    database:'neuproject'
})

module.exports = db