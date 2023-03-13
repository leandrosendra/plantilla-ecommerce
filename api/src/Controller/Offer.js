const { Offer, Product, QuantityOffer } = require("../database/db.js");

const getOffer = async(req,res)=>{
    try{
        const o = await Offer.findAll({
            include:[
                {model:QuantityOffer,
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
}

const postOffer = async(req, res)=>{
    const { name, price , products} = req.body;
    try {
        let idProducts = []
        products.map(async(c)=>{ 
            const qty = c.quantity;
            const qtyProd = await QuantityOffer.create({quantity:qty})
            qtyProd.setProduct(c.idProduct)
            idProducts.push(Number(qtyProd.id)) 
        }); 
        const offer = await Offer.create({name, price});
        offer.addQuantityOffer(idProducts);
        console.log(idProducts);
        res.status(200).json(offer);
  
    } catch (err){
        console.log(err);
        res.status(400).send('send');
    }
}


module.exports = {
    getOffer,
    postOffer
}