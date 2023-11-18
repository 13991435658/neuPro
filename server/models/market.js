const db = require('../db/dbconfig')
const marketModel = {
    getGoods(){
        return db.query('select g.*,u.id,u.username,u.sex,u.avatarfile from goods g join users u on g.userId = u.id')
    },
    publishGoods(body,file){
        const {title,price,address,newdegree,category,userId,remark,time} = body
        const imgUrl = `http://localhost:5000/uploads/${file.filename}`
        return db.query('insert into goods (title,price,address,newdegree,category,userId,remark,time,imgUrl) values (?,?,?,?,?,?,?,?,?)',[title,price,address,newdegree,category,userId,remark,time,imgUrl])
    },
    getPublisherInfo:async (params)=>{
        const {userId} = params
        const [publisher] = await db.query('select * from users where id=?',[userId])
        const [publishgoods] = await db.query('select * from goods where userId=?',[userId])
        const [fansres] = await db.query('select f.followId from follows f where isfollowedId=?',[userId])
        const [followsres] = await db.query('select f.isfollowedId from follows f where followId=?',[userId])
        fans = fansres.map(item=>item.followId)
        follows = followsres.map(item=>item.isfollowedId)
        console.log(fans,follows)
        return [publisher,publishgoods,fans,follows]
    }
}

module.exports = marketModel