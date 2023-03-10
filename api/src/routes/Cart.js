const { Router } = require('express');
const router = Router();
const { Cart, QuantityCart, Product } = require('../database/db.js');
const { getCart, postProductOffer, putProductOffer, deleteTotalCart, deleteProductOffer } = require('../Controller/Cart.js');

router.get('/cart', getCart);

router.post('/cart/:id', postProductOffer);

router.put('/cart/:id', putProductOffer);

router.delete('/cart/delete/:id', deleteTotalCart );

router.delete('/cart/:id', deleteProductOffer);

module.exports = router