const { Router } = require('express');
const router = Router();
const { Comment, User, Product, LikeProduct } = require('../database/db.js');



const fyh = ()=>{
    // Creamos un objeto Date con la fecha y hora actuales
    const fechaHoraActual = new Date();

    // Obtenemos la hora actual en formato hh:mm
    const horas = fechaHoraActual.getHours().toString().padStart(2, '0');
    const minutos = fechaHoraActual.getMinutes().toString().padStart(2, '0');
    const horaActual = `${horas}:${minutos}`;

    // Obtenemos la fecha actual en formato dd:mm:aa
    const dia = fechaHoraActual.getDate().toString().padStart(2, '0');
    const mes = (fechaHoraActual.getMonth() + 1).toString().padStart(2, '0'); // Nota: los meses empiezan en 0
    const anio = fechaHoraActual.getFullYear().toString().slice(-2); // Solo los últimos dos dígitos del año
    const fechaActual = `${dia}/${mes}/${anio}`;

    // Mostramos la hora y fecha actuales en los formatos deseados
    return `${horaActual} ${fechaActual}`
}



router.get('/comment', async(req,res)=>{
       try{
           const cmt = await Comment.findAll();
           res.status(200).json(cmt);
       }
   catch(err){
       console.log(err);
       res.status(400).send('err en get comment');
   }
});

router.get('/like', async(req,res)=>{
    try{
        const like = await LikeProduct.findAll();
        res.status(200).json(like);
    }
    catch(err){
        console.log(err);
        res.status(400).send('err en get like');
    }
});

router.get('/like/user/:idUser', async(req,res)=>{
    const {idUser} = req.params

    try{
        const like = await LikeProduct.findAll({
            where:{UserId:idUser}
        });
        res.status(200).json(like);
    }
    catch(err){
        console.log(err);
        res.status(400).send('err get LikePge');
    }
});

router.get('/like/product/:idProduct', async(req,res)=>{
    const {idProduct} = req.params

    try{
        const like = await LikeProduct.findAll({
            where:{ProductId:idProduct}
        });
        res.status(200).json(like);
    }
    catch(err){
        console.log(err);
        res.status(400).send('err get LikePge');
    }
});

router.post('/comment/:idUser', async(req, res)=>{//para seguir el hilo, se podria guardar el id del comentrario,
    const {idUser} = req.params                   //para no tener que volver a buscarlo (filtrarlo)
    const {comments, idProduct} = req.body;

    try {
        let idComment = []
        const fecha = fyh()
        if(comments){
            const cmt = await Comment.create({comments:comments, date:fecha});
            cmt.setUser(idUser);
            idComment.push(Number(cmt.id))
           
        }
        const prod = await Product.findOne({
            where:{
                id:idProduct
            }
        });
        setTimeout(() => {
            prod.addComment(idComment)
            res.status(200).json(prod);
        });
    } catch (err){
        console.log(err);
        res.status(400).send('err en post comment');
    }
});

router.post('/like/:idUser/:idProduct', async(req, res)=>{
    const {idUser,idProduct} = req.params;
    try {
        const like = await LikeProduct.findOne({
            where:{
                UserId:idUser,
                ProductId:idProduct
            }
        });
        const product = await Product.findOne({where:{id:idProduct}})
        
        if (!like) {
            const likeCreate = await LikeProduct.create({UserId:idUser, ProductId:idProduct});
            product.like++
            product.save()
            res.status(200).json(likeCreate);  
        }else if(like){
            let l = !like.like
            like.like = l
            like.save() 
            product.like--
            product.save()
            res.status(200).json(like);
        }        
    } catch (err){
        console.log(err);
        res.status(400).send('send');
    }
})

module.exports = router