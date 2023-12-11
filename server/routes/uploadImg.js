const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'public/uploads/' })    

router.post('/api/uploadimg',upload.single('uploadimg'),(req,res)=>{
    res.send({
        ok:1,
        message:{
            url:`http://localhost:5000/uploads/${req.file.filename}`,
            alt:'出错了',
        }
    })
})

module.exports = router