const {verifyToken} = require('../helpers/generateToken')

const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        console.log(tokenData)
        if(tokenData.id) {
            next()
        } else {
            res.status(409)
            res.send({error: 'no puedes pasar'})
        }
    }catch {

    }
}

module.exports = checkAuth