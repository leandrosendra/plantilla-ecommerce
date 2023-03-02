const { Router } = require('express');
const router = Router();
const { getCategory, getColors, getSize, postCategory, postColor, postSize } = require('../Controller/Category.js')


router.get('/category', getCategory);
router.get('/color', getColors);
router.get('/size', getSize);

router.post('/category', postCategory);
//router.post('/color', postColor);
//router.post('/size', postSize);

module.exports = router 