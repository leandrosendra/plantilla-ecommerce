const { Router } = require('express');
const router = Router();
const { Cart, Quantity, Product } = require('../database/db.js');

router.get('/cart', async(req,res)=>{
       try{
           const cart = await Cart.findAll();
           res.status(200).json(cart);
       }
   catch(err){
       console.log(err);
       res.status(400).send('err en get cart');     
   }
});

router.get('/quantity', async(req,res)=>{
       try{
           const a = await Quantity.findAll({
            include:[
                {model: Product},
            ],
           });
           res.status(200).json(a);
       }
   catch(err){
       console.log(err);
       res.status(400).send('hola');
   }
});

router.post('/cart/:id', async(req, res)=>{
    const {id} = req.params;

    try {
        const a = await Cart.create({});
        res.status(200).json(a);
    } catch (err){
        console.log(err);
        res.status(400).send('send');
    }
})

router.post('/quantity', async(req, res)=>{

    const {quantity, idProduct} = req.body;

    try {
        const q = await Quantity.create({quantity});
        q.setProduct(idProduct)
        console.log(q.id);
        res.status(200).json(q);
    } catch (err){
        console.log(err);
        res.status(400).send('send');
    } 
})

module.exports = router