const db = require('../db/dbconfig')

const lostfoundModel = {
    founditem:(body,file)=>{
        const {itemname,time,detailInfo,address,contact,userId} = body
        const itemimg = `http://localhost:5000/uploads/${file.filename}`
        return db.query('insert into founditems (itemname,time,detailInfo,address,contact,userId,itemimg) values (?,?,?,?,?,?,?)',[itemname,time,detailInfo,address,contact,userId,itemimg])
    },
    getfound:async ()=>{
        return db.query('select f.*,u.username,u.avatarfile from founditems f join users u on f.userId = u.id')
    }
}

module.exports = lostfoundModel