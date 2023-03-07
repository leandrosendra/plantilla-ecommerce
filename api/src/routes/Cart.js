const { Router } = require('express');
const router = Router();
const { Cart, QuantityCart, Product } = require('../database/db.js');

router.get('/cart', async(req,res)=>{
        try{
            const cart = await Cart.findAll({
                include:[
                    {model:QuantityCart,
                        include:[
                            {model: Product},
                        ],
                    },
                ],
            });
           res.status(200).json(cart);
        }
   catch(err){
       console.log(err);
       res.status(400).send('err en get cart');     
   }
});

router.post('/cart/:id', async(req, res)=>{
    const {id}= req.params;
    const {products, offer} = req.body;//{prod:[idProd:1,cant:2]} / {offer:[{idProd:1,cant:2}]}
    //console.log(products);
    try {
        let idProducts = [];
        products?.map(async(c)=>{ 
            console.log(1);
            const qty = c.quantity;
            console.log(2);
            const qtyProd = await QuantityCart.create({quantity:qty})
            console.log(5);
            //console.log(qtyProd);
            qtyProd.setProduct(c.idProduct)
            idProducts.push(Number(qtyProd.id))
            console.log(3);
            console.log("123");  
        });
        const cart = await Cart.findOne(  
           { where:{id:id}}
        );
    
        setTimeout(() => {
            console.log(idProducts);
            cart.addQuantityCart(idProducts)//arreglat quantity//le agrego el nuevo producto
            res.status(200).json(cart);
        },500)
        
    } catch (err){
        console.log(err);
        res.status(400).send('err en quantity');
    }
})

//creo user -> tiene crearse el carrito
//user -> cart


//crecion del carrito en el user
//post para agregar nuevo producto 
//put editar cant
//delete para eliminar un producto
//delete para vaciar el carrito
module.exports = router