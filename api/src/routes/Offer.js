const { Router } = require("express");
const router = Router();
const { Offer, Product, OfferProduct } = require("../database/db.js");


router.get('/', async(req,res)=>{
       try{
           const offer = await Offer.findAll({
            include: [
                {
                    model: OfferProduct,
                    
                },
              ],
           });
           
           
           res.status(200).json(offer);
       } 
   catch(err){
       console.log(err);
       res.status(400).send('err en get offet');
   }
});

router.post('/', async(req, res)=>{
    const {name, price, quantity, product } = req.body;//,idProduct
   //console.log(qty); 
    try {
        //const cOfferProd = await OfferProduct.create({quantity}); 
       //const cOffer = await Offer.create({
       //    name, 
       //    price, 
       //    
       //
       //});
       //console.log(cOffer.id);
       //cOffer.setOfferProduct(quantity, OfferId:cOffer.id, ProductId:product)
       ////console.log(OfferProduct.quantity)
       //res.status(200).json(cOffer);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post offer');
    }
});


module.exports = router