const db = require('../db/dbconfig')
const topicModel = {
    publishTopic:(body,file)=>{
        const {userId,title,detail,label,time} = body
        const cover = `http://localhost:5000/uploads/${file.filename}`
        return db.query('insert into topics (userId,title,detail,label,cover,time) values (?,?,?,?,?,?)',[userId,title,detail,label,cover,time])
    },
    getallTopic:async (params)=>{
        const [allTopic] = await db.query('select t.*,u.avatarfile,u.username,u.id,u.sex from topics t join users u on t.userId=u.id')
        const [supportedItem] = await db.query('select * from supports where userId=?',[params.userId])
        const [commentInfo] = await db.query('select c.topicId from comments c')
        const commentArr = commentInfo.map(item=>item.topicId)
        const commentMap = {}
        commentArr.forEach((num)=>commentMap[num]=(commentMap[num] || 0)+1)
        const supportInfo = {}
        const hotNum = {}
        allTopic.forEach(item=>supportInfo[item.topicId]=[item.support,supportedItem.find(fitem=>fitem.topicId===item.topicId)?true:false])
        allTopic.forEach(item=>hotNum[item.topicId]=item.hot)
        return {supportInfo,allTopic,hotNum,commentMap}
    },
    updateSupport:(body)=>{
        const {userId,diffres} = body
        const allpromise = []
        const SQL1 = (arr)=>{
            const [topicId,bool] = arr
            return bool?`update topics set topics.support=topics.support+1 where topicId=${topicId}`
            :`update topics set topics.support=topics.support-1 where topicId=${topicId}`
        }
        const SQL2 = (arr)=>{
            const [topicId,bool] = arr
            return bool?`insert into supports (userId,topicId) values (${userId},${topicId})`:`delete from supports where userId=${userId} and topicId=${topicId}`
        }
        diffres.forEach(item=>allpromise.push(db.query(SQL1(item)),db.query(SQL2(item))))    
        return Promise.all(allpromise)
    },
    addHot:(query)=>{
        const {topicId} = query
        return db.query(`update topics set hot = hot+1 where topicId=${topicId}`)
    },
    getTopicDetail:async (query)=>{
        const [detail] = await db.query(`select t.*,u.avatarfile,u.username,u.id,u.sex from topics t join users u on t.userId=u.id where t.topicId=${query.topicId}`)
        return detail[0]
    },
    publishComment:(body)=>{
        const {topicId,userId,commenthtml,time} =  body
        return db.query('insert into comments (topicId,userId,commenthtml,time) values (?,?,?,?)',[topicId,userId,commenthtml,time])
    },
    getTopicComment:({topicId})=>{
        return db.query('select c.*,u.id,u.avatarfile,u.username from comments c join users u on c.userId = u.id where c.topicId=?',[topicId])
    },
    publishReply:(body)=>{
        const {topicId,commentId,receiveId,sendId,time,replyhtml} = body
        return db.query('insert into replys (topicId,commentId,receiveId,sendId,time,replyhtml) values (?,?,?,?,?,?)',[topicId,commentId,receiveId,sendId,time,replyhtml])
    },
    getCommentReply:async ({topicId})=>{
        const [replyArr] = await db.query('select r.*,u.id,u.avatarfile,u.username from replys r join users u on r.sendId = u.id where r.topicId=?',[topicId])
        for(let item of replyArr){
            const [receiver] = await db.query('select * from users where id=?',[item.receiveId])
            item.receiveName = receiver[0].username
            item.receiveAvatar = receiver[0].avatarfile
        }
        return replyArr
    }
}

module.exports = topicModel
