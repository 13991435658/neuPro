const express = require('express')
const router = express.Router()
const loginCtrl = require('../controllers/login')

router.post('/api/login',loginCtrl.login)

module.exports = router