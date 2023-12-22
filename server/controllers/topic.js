const topicModel = require("../models/topic")
const moment = require('moment')
moment.locale('zh-cn')

const topicCtrl = {
    publishTopic:async (req,res)=>{
        await topicModel.publishTopic(req.body,req.file)
        res.send({
            ok:1,
            message:'发布成功'
        })
    },
    getallTopic:async (req,res)=>{
        const {supportInfo,allTopic,hotNum,commentMap} = await topicModel.getallTopic(req.params)
        allTopic.forEach(item=>item.usertime=`用户 ${item.username} 发布于 ${moment(item.time).format('lll')}`)
        res.send({
            ok:1,
            allTopic,
            supportInfo,
            hotNum,
            commentMap
        })
    },
    updateSupport:async (req,res)=>{
       await topicModel.updateSupport(req.body)
       res.send(({
        ok:1,
        message:'变更点赞成功'
       }))
    },
    addHot:async(req,res)=>{
        await topicModel.addHot(req.query)
        res.send({
            ok:1,
            message:'热度加1'
        })
    },
    getTopicDetail:async (req,res)=>{
        const detail = await topicModel.getTopicDetail(req.query)
        res.send({
            ok:1,
            detail
        })
    },
    publishComment:async (req,res)=>{
        await topicModel.publishComment(req.body)
        res.send({
            ok:1,
            message:'评论成功'
        })
    },
    getTopicComment:async (req,res)=>{
        const [result] = await topicModel.getTopicComment(req.query)
        res.send({
            ok:1,
            commentInfo:result
        })
    },
    publishReply:async (req,res)=>{
        await topicModel.publishReply(req.body)
        res.send({
            ok:1,
            message:'回复成功'
        })
    },
    getCommentReply: async (req,res)=>{
        const result = await topicModel.getCommentReply(req.query)
        res.send({
            ok:1,
            replyInfo:result
        })
    }
}

module.exports = topicCtrl