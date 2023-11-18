const express = require('express')
const marketCtrl = require('../controllers/market')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest:'public/uploads'})

router.get('/api/market/getgoods',marketCtrl.getGoods)
router.post('/api/market/publishgoods',upload.single('goodsimgfile'),marketCtrl.publishGoods)
router.get('/api/market/publisherinfo/:userId',marketCtrl.getPublisherInfo)

module.exports = router