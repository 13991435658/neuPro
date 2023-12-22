const express = require('express')
const router = express.Router()
const multer = require('multer')
const topicCtrl = require('../controllers/topic')
const upload = multer({ dest: 'public/uploads/' })    

router.post('/api/topic/publishtopic',upload.single('cover'),topicCtrl.publishTopic)
router.get('/api/topic/alltopic/:userId',topicCtrl.getallTopic)
router.post('/api/topic/updatesupport',topicCtrl.updateSupport)
router.get('/api/topic/addHot',topicCtrl.addHot)
router.get('/api/topic/gettopicdetail',topicCtrl.getTopicDetail)
router.post('/api/topic/publishcomment',topicCtrl.publishComment)
router.get('/api/topic/gettopiccomment',topicCtrl.getTopicComment)
router.post('/api/topic/publishreply',topicCtrl.publishReply)
router.get('/api/topic/getcommentreply',topicCtrl.getCommentReply)

module.exports = router