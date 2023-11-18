const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

router.get('/api/alluser',userCtrl.getAlluser)
router.get('/api/recommenduser',userCtrl.getRecommmendUser)
router.post('/api/followuser',userCtrl.followUser)
router.post('/api/followinfo',userCtrl.getfollowInfo)
router.delete('/api/unfollowuser',userCtrl.unfollowUser)
router.get('/api/addconversation',userCtrl.addConversation)
router.get('/api/getconversations/:id',userCtrl.getConversations)
router.get('/api/getmessages/:id',userCtrl.getMessages)
router.post('/api/sendmessage',userCtrl.sendMessage)
router.post('/api/lastmessage',userCtrl.lastMessage)

module.exports = router