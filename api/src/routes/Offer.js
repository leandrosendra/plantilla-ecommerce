const { Router } = require("express");
const router = Router();
const { getOffer, postOffer } = require('../Controller/Offer.js');


router.get('/', getOffer);

router.post('/', postOffer)

module.exports = router