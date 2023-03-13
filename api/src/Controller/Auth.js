const {encrypt, compare} = require('../helpers/encryptPassword')
const {tokenSign} = require('../helpers/generateToken')
const { User, Cart} = require('../database/db.js')

const getUser = async (req, res) => {
    try {
        const user = await User.findAll({
            include:[
                {
                    model:Cart
                }
            ]
        })
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
}

const registerUser = async (req, res) => { 
    const { name, email, password} = req.body;
    const passwordHash = await encrypt(password)
    try {
        const registerUser = await User.create({
            name, email, password: passwordHash
        })
        const idUser = registerUser.id
        const createCart = await Cart.create({id:idUser})
        res.status(200).json(registerUser)
    } catch (err) {
        console.log(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body;
        const user = await User.findOne({
            where: {email: email}
        })
        if(!user) {
            res.status(404)
            res.send({error: 'user not found'})
        }
        const checkPassword = await compare(password.toString(), user.password)
        const tokenSession = await tokenSign(user)
        if(checkPassword) {
            res.send({
                data: user,
                tokenSession
            })
            return
        }
        if(!checkPassword) {
            res.status(404)
            res.send({
               error: "invalid password"
            })
            return
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUser,
    registerUser,
    loginUser
}