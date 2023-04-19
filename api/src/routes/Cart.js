const { Router } = require('express');
const router = Router();
const { getCart, postProductOffer, sumQuantityCart, restQuantityCart, putProductOffer, deleteTotalCart, deleteProductOffer } = require('../Controller/Cart.js');

router.get('/cart', getCart);

router.post('/cart/:idUser', postProductOffer);

router.put('/sum/:idUser', sumQuantityCart);
router.put('/rest/:idUser', restQuantityCart);
router.put('/cart/:idUser', putProductOffer);

router.delete('/cart/delete/:idUser', deleteTotalCart );

router.delete('/cart/:idUser', deleteProductOffer);

module.exports = router