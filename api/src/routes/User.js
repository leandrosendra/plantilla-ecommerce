const { Router } = require('express');
const { User} = require('../database/db.js')
const router = Router();

router.get('/', async (req, res) => {
    try {
        const user = await User.findAll()
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    try {
        const user = await User.create({
            name, email, password, isAdmin
        })
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.destroy({
            where: { id: id },
        });
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router