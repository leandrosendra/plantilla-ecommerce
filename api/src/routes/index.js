const {Router} = require( 'express');
const Product = require('./Product.js');
const Category = require('./Category.js');
const Cart = require('./Cart.js');
const User = require('./User.js');
const Offer = require('./Offer.js');
const Auth = require('./Auth.js')


const router = Router();

//router.use('/prueba', Prueba);
router.use('/product', Product);
router.use('/category', Category);
router.use('/cart', Cart);
router.use('/user', User);
router.use('/offer', Offer);
router.use('/auth', Auth);
  


module.exports = router