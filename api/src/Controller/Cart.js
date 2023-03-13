const { Cart, QuantityCart, Product, Offer, QuantityOffer } = require('../database/db.js');


const getCart = async(req,res)=>{
    try{
        const cart = await Cart.findAll({
            include:[
                {model:QuantityCart,
                    include:[
                        {model: Product},
                        {model: Offer,
                            include:[
                                {model:QuantityOffer,
                                    include:[
                                        {model: Product},
                                    ],
                                },
                            ]
                        }
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
//hacer get de un solo cart

const postProductOffer = async(req, res)=>{
    const {idUser}= req.params;
    const {products, offers} = req.body;

    try {
        let idProducts = [];
        //tomando que se envia de a un producto u oferta
        //solo serian 2 condiciones
        if (products){
            products?.map(async(c)=>{ 
                //buscar el prod en el carrito
                const qty = c.quantity;
                const prod = await QuantityCart.findOne({
                    where: {
                        CartId: idUser,
                        ProductId: c.idProduct,
                    },
                });
                if(!prod){//controlo si no existe el mismo producto 
                    const qtyProd = await QuantityCart.create({quantity:qty})
                    qtyProd.setProduct(c.idProduct);
                    idProducts.push(Number(qtyProd.id));
                }else{ //si existe solo sumo uno a la cantidad del producto
                    console.log("ya existe");
                    prod.quantity ++;
                    await prod.save();
                }
            }); 
        }else if (offers) {
            offers?.map(async(c)=>{ 
                const qty = c.quantity;
                const offer = await QuantityCart.findOne({
                    where: {
                        CartId: idUser,
                        OfferId: c.idOffer,
                    },
                });
                if(!offer){//controlo si no existe el mismo offer
                    const qtyOffer = await QuantityCart.create({quantity:qty});
                    qtyOffer.setOffer(c.idOffer);
                    idProducts.push(Number(qtyOffer.id)); 
                }else{ //si existe solo sumo uno a la cantidad del offer
                    console.log("ya existe");
                    offer.quantity ++;
                    await offer.save();
                }
            }); 
        }
        const cart = await Cart.findOne(  
           { where:{id:idUser}}
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

const sumQuantityCart = async(req, res)=>{
    const {idUser} = req.params;
    const {idProducts, idOffers} = req.body;
    try {
        if (idProducts) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    ProductId: idProducts,
                },
            });
            cart.quantity ++;
            await cart.save();
            res.status(201).json(cart);
        }
        else if (idOffers) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    OfferId: idOffers,
                },
            });
            cart.quantity ++;
            await cart.save();
            res.status(201).json(cart);
        }
    } catch (err) {
        console.log(err);
    }
}

const restQuantityCart = async(req, res)=>{
    const {idUser} = req.params;
    const {idProducts, idOffers} = req.body;
    try {
        if (idProducts) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    ProductId: idProducts,
                },
            });
            cart.quantity --;
            await cart.save();
            res.status(201).json(cart);
        }
        else if (idOffers) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    OfferId: idOffers,
                },
            });
            cart.quantity --;
            await cart.save();
            res.status(201).json(cart);
        }
    } catch (err) {
        console.log(err);
    }
}

const putProductOffer = async(req, res)=>{
    const {idUser} = req.params;
    const {idProducts, idOffers, quantity} = req.body;
    try {
        if (idProducts) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    ProductId: idProducts,
                },
            });
            cart.quantity = quantity;
            await cart.save();
            res.status(201).json(cart);
        }
        else if (idOffers) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    OfferId: idOffers,
                },
            });
            cart.quantity = quantity;
            await cart.save();
            res.status(201).json(cart);
        }
    } catch (err) {
        console.log(err);
    }
}

const deleteProductOffer =async(req, res)=>{
    const {idUser} = req.params;
    const {idProducts, idOffers}= req.body;

    try {
        if (idProducts) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    ProductId: idProducts,
                },
            });
            const hola = cart;
            await cart.destroy();
            res.status(200).json(hola);
        }
        else if (idOffers) {
            const cart = await QuantityCart.findOne({
                where: {
                    CartId: idUser,
                    OfferId: idOffers,
                },
            });
            const hola = cart;
            await cart.destroy();
            res.status(200).json(hola);
        }
        const hola = cart;
        await cart.destroy();
        res.status(200).json(hola);
    } catch (err) {
        console.log(err);
    }

}

const deleteTotalCart = async(req, res)=>{
    const {idUser} = req.params;
    try {
        await QuantityCart.destroy({
            where:{
                CartId: idUser
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
    sumQuantityCart,
    restQuantityCart,
    putProductOffer,
    deleteTotalCart,
    deleteProductOffer
}