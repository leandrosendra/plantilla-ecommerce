const { Router } = require('express');
const router = Router();
const { Cart } = require('../database/db.js');

router.get('/', async (req, res) => {
    try {
        const cart = await Cart.findAll()
        res.status(200).json(cart)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router