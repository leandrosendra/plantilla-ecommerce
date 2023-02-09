const { Router } = require('express');
const router = Router();
const { Category } = require('../database/db.js');



router.get('/', async (req, res) => {
    try {
        const category = await Category.findAll()
        res.status(200).json(category)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const category = await Category.create({
            name
        })
        res.status(200).json(category)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router