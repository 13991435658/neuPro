const lostfoundModel = require("../models/lostfound")
const moment = require('moment')
moment.locale('zh-cn')

const lostfoundCtrl = {
    founditem: async (req, res) => {
        try {
            await lostfoundModel.founditem(req.body, req.file)
            res.send({
                ok: '1',
                message: '发布成功'
            })
        } catch {
            res.send({
                ok: '1',
                message: '发生错误'
            })
        }
    },
    getfound:async (req,res)=>{
        const [result] = await lostfoundModel.getfound()
        result.forEach(item=>item.time=`用户 ${item.username} 发布于 ${moment(item.time).format('lll')}`,)
        res.send({
            ok:1,
            founditems:result.reverse()
        })
    }
}

module.exports = lostfoundCtrl