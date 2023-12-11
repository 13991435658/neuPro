const JWT = require("../jwt/jwtconfig")

const Auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        const detoken = JWT.verify(token.split(' ')[1])
        if (detoken) {
            const { id, username, password, occupation, sex, avatarfile } = detoken
            const newtoken = JWT.sign({ id, username, password, occupation, sex, avatarfile }, '5h')
            res.header('authorization', newtoken)
            next()
        } else {
            res.status(401).send({
                ok: '0',
                message: 'token被修改,请求失败'
            })
        }
    }else{
        res.status(401).send({
            ok:'0',
            message:'token过期了'
        })
    }
}


module.exports = Auth