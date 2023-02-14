const {encrypt} = require('../helpers/encryptPassword')
const { User} = require('../database/db.js')
const { Router } = require('express');
const router = Router();

//REGISTER

router.post('/', async (req, res) => {
    const { name, email, password} = req.body;
    const passwordHash = await encrypt(password)
    try {
        const registerUser = await User.create({
            name, email, password: passwordHash
        })
        res.status(200).json(registerUser)
    } catch (err) {
        console.log(err);
    }
});

// LOG IN 

router.post('/', async (req, res) => {
    
    try {
        const { email, password} = req.body;
        const user = await User.findAll({
            where: {email: email}
        })
        if(!user) {
            res.status(404)
            res.send({error: 'user not found'})
        }
        checkPassword = await compare(password, user.password)
        const tokenSession = await tokenSign(user)
        if(checkPassword) {
            res.send({
                data: user,
                token: tokenSession
            })
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router