const registerService = require("../models/register")

const registerCtrl = {
    register: async (req, res) => {
        const [result] = await registerService.match(req.body)
        if (result.length) {
            res.send({
                ok: 0,
                message: '该用户名已存在'
            })
        } else {
            await registerService.register(req.body, req.file)
            res.send({
                ok: 1,
                message:'注册成功'
            })
        }
    }
}

module.exports = registerCtrl