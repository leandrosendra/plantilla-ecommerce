const { Router } = require("express");
const router = Router();
const { getProduct, postPrduct, bulkProduct, putProuct, deleteProduct } = require('../Controller/Product.js');

router.get("/", getProduct);
router.post("/", postPrduct);
router.post('/bulk', bulkProduct);
router.put("/:id", putProuct);
router.delete("/:id", deleteProduct);

module.exports = router;

