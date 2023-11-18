const db = require("../db/dbconfig");
const userModel = {
    getAlluser: (query) => {
        const { userId } = query
        return db.query('select * from users where id!=?', [userId])
    },
    getRecommendUser: (query) => {
        const { userId } = query
        return db.query('select * from users where id!=?', [userId])
    },
    followUser: (body) => {
        const { followId, isfollowedId } = body
        return db.query('insert into follows (followId,isfollowedId) values (?,?)', [followId, isfollowedId])
    },
    unfollowUser: (query) => {
        const { followId, isfollowedId } = query
        return db.query('delete from follows where followId=? and isfollowedId=?', [followId, isfollowedId])
    },
    myfollow: (id) => {
        return db.query('select * from follows where followId=?', [id])
    },
    followme: (id) => {
        return db.query('select * from follows where isfollowedId=?', [id])
    },
    matchConversation: (query) => {
        const { currentId, targetId } = query
        return db.query('select * from conversations where (currentId=? and targetId=?) or (currentId=? and targetId=?)', [currentId, targetId, targetId, currentId])
    },
    addConversation: (query) => {
        const { currentId, targetId } = query
        return db.query('insert into conversations (currentId,targetId) values (?,?)', [currentId, targetId])
    },
    getConversations: (id) => {
        return db.query('select * from conversations where currentId=? or targetid=?', [id, id])
    },
    getMessages: (id) => {
        return db.query('select * from messages where conversationId=?', [id])
    },
    sendMessage: (conversationId, senderId, content, time) => {
        return db.query('insert into messages (conversationId,senderId,content,time) values (?,?,?,?)', [conversationId, senderId, content, time])
    },
    lastMessage: async (body) => {
        const { cvsidArr } = body
        const result = {}
        for (index in cvsidArr) {
            const sql = `select * from messages where conversationId=? order by time desc limit 1`
            const [res] = await db.query(sql, [cvsidArr[index]])
            res.length !== 0 ? result[cvsidArr[index]] = {'content':res[0]['content'],'time':res[0]['time']} : result[cvsidArr[index]] = {'content':'',time:''}
        }
        return result
    }
}

module.exports = userModel