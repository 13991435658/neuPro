const db = require('../db/dbconfig')

const lostfoundModel = {
    founditem:(body,file)=>{
        const {itemname,time,detailInfo,address,contact,userId,type} = body
        const itemimg = `http://localhost:5000/uploads/${file.filename}`
        return db.query('insert into lostfounds (itemname,time,detailInfo,address,contact,userId,itemimg,type) values (?,?,?,?,?,?,?,?)',[itemname,time,detailInfo,address,contact,userId,itemimg,type])
    },
    getfound:async ()=>{
        return db.query('select f.*,u.username,u.avatarfile from lostfounds f join users u on f.userId = u.id')
    },
    deleteitem:(query)=>{
        return db.query('delete from lostfounds where lostfoundId=?',[query.lostfoundId])
    }
}

module.exports = lostfoundModel