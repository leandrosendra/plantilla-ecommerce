const {Router} = require( 'express');
const Product = require('./Product.js');
const Category = require('./Category.js');


const router = Router();

//router.use('/prueba', Prueba);
router.use('/product', Product);
router.use('/category', Category);



module.exports = router