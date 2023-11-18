const db =  require('../db/dbconfig')
const registerService = {
    match:(body)=>{
        const {username} = body
        return db.query('select * from users where username=?',[username])
    },
    register: (body,file)=>{
        const {username,password,occupation,sex} = body
        avatarfile=(file?`http://localhost:5000/uploads/${file.filename}`:body.avatarfile?body.avatarfile:'/avatar/defaultAvatar.jpg')
        return db.query('insert into users (username,password,occupation,sex,avatarfile) values (?,?,?,?,?)',[username,password,occupation,sex,avatarfile])
    }
}


module.exports = registerService
