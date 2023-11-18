var express = require('express');
var router = express.Router();
const registerCtrl = require('../controllers/register')
const multer = require('multer')
const upload = multer({ dest: 'public/uploads/' })    

router.post('/api/register',upload.single('avatarfile'),registerCtrl.register);

module.exports = router;
