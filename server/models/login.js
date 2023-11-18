const db = require('../db/dbconfig')

const loginServer = {
    verify:(body)=>{
        const {username,password} = body
        return db.query('select * from users where username=? and password=?',[username,password])
    }
}

module.exports = loginServer