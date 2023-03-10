const { Cart, QuantityCart, Product } = require('../database/db.js');


const getCart = async(req,res)=>{
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
}

const postProductOffer = async(req, res)=>{
    const {id}= req.params;
    const {products, offer} = req.body;

    try {
        let idProducts = [];
        products?.map(async(c)=>{ 
            const qty = c.quantity;
            const qtyProd = await QuantityCart.create({quantity:qty})
            qtyProd.setProduct(c.idProduct)
            idProducts.push(Number(qtyProd.id))  
        });
        const cart = await Cart.findOne(  
           { where:{id:id}}
        );
    
        setTimeout(() => {
            cart.addQuantityCart(idProducts)
            res.status(200).json(cart);
        },500)
         
    } catch (err){
        console.log(err);
        res.status(400).send('err en postProductOffer');
    }
}

//id del user
//func + - quantity
//arreglar doble producyo(sumar en quantity)
//agregar Offer a cart


const putProductOffer = async(req, res)=>{
    const {id} = req.params;
    const {idProduct, quantity} = req.body;
    try {
        const cart = await QuantityCart.findOne({
                where: {
                    CartId: id,
                    ProductId: idProduct,
                },
            });
        cart.quantity = quantity;
        res.status(201).json(cart);

    } catch (err) {
        console.log(err);
    }
}

const deleteProductOffer =async(req, res)=>{
    const {id} = req.params;
    const {idProduct}= req.body;

    try {
        const cart = await QuantityCart.findOne({
                where: {
                    CartId: id,
                    ProductId: idProduct,
                },
            })
        const hola = cart;
        await cart.destroy();
        res.status(200).json(hola);
    } catch (err) {
        console.log(err);
    }

}

const deleteTotalCart = async(req, res)=>{
    const {id} = req.params;
    try {
        await QuantityCart.destroy({
            where:{
                CartId: id
            }
        });

        res.status(200).send("Se limpio el carrito");
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getCart,
    postProductOffer,
    putProductOffer,
    deleteTotalCart,
    deleteProductOffer
}