const {verifyToken} = require('../helpers/generateToken')
const User = require('../models/User')


const checkRoleAuth = (roles) = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
       const userData = await User.findById(tokenData.id)
        if([].concat(roles).includes(userData.role)) {
            next()
        } else {
            res.status(409)
            res.send({error: 'no puedes pasar'})
        }
    }catch {

    }
}

module.exports = checkRoleAuth