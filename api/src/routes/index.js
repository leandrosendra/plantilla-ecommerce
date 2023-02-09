const {Router} = require( 'express');
const Product = require('./Product.js');
const Category = require('./Category.js');
const Cart = require('./Cart.js');
const User = require('./User.js');


const router = Router();

//router.use('/prueba', Prueba);
router.use('/product', Product);
router.use('/category', Category);
router.use('/cart', Cart);
router.use('/user', User);



module.exports = router