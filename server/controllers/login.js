const loginServer = require('../models/login')
const JWT = require('../jwt/jwtconfig')
const loginCtrl = {
    login: async (req, res) => {
        const [result] = await loginServer.verify(req.body)
        if (result.length) {
            const token = JWT.sign(result[0], '1h')
            res.header('authorization', token)                   //引号不能掉
            res.send({
                ok: 1,
                userInfo: result[0],
            })
        } else {
            res.send({
                ok: 0,
                message: '账号密码错误'
            })
        }
    }
}

module.exports = loginCtrl