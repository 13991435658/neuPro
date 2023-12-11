const express = require('express')
const router = express.Router()
const multer = require('multer')
const lostfoundCtrl = require('../controllers/lostfound')
const upload = multer({ dest:'public/uploads'})

router.post('/api/lostfound/founditem',upload.single('itemimgfile'),lostfoundCtrl.founditem)
router.get('/api/lostfound/getfound',lostfoundCtrl.getfound)
router.delete('/api/lostfound/deleteitem',lostfoundCtrl.deleteitem)

module.exports = router