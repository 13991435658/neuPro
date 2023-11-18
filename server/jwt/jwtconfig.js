const jwt = require('jsonwebtoken')
const secret = 'rgq66666'
const JWT = {
    sign: (value, expires) => {
        return jwt.sign(value, secret, { expiresIn: expires })
    },
    verify: (token) => {
        try {
            return jwt.verify(token, secret)
        } catch(e) {
            return false
        }
    }
}

module.exports = JWT