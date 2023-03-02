const { Router } = require("express");
const router = Router();
const { Offer, Product, Quantity } = require("../database/db.js");


router.get('/', async(req,res)=>{
        try{
            const o = await Offer.findAll({
                include:[
                    {model:Quantity,
                        include:[
                            {model: Product},
                        ],
                    },
                ]
            });
           res.status(200).json(o);
       }
   catch(err){
       console.log(err);
       res.status(400).send('kdjalkd');
   }
});


router.post('/', async(req, res)=>{
    const { name, price , products} = req.body;
    try {
        let idProducts = []
        await products.map(async(c)=>{ 
            const q = c.quantity;
            const t = await Quantity.create({quantity:q})
            t.setProduct(c.idProduct)
            idProducts.push(Number(t.id)) 
        })
        const offer = await Offer.create({name, price});
        offer.addQuantity(idProducts);
        res.status(200).json(offer);

    } catch (err){
        console.log(err);
        res.status(400).send('send');
    }
})

module.exports = router