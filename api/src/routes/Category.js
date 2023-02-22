const { Router } = require('express');
const router = Router();
const { Category, Size, Color } = require('../database/db.js');


router.get('/category', async(req,res)=>{
       try{
           const category = await Category.findAll();
           res.status(200).json(category);
       }
   catch(err){
       console.log(err);
       res.status(400).send('err en get category');
   }
});

router.get('/color', async(req,res)=>{
       try{
           const color = await Color.findAll();
           res.status(200).json(color);
       }
   catch(err){
       console.log(err);
       res.status(400).send('err en color');
   }
});

router.get('/size', async(req,res)=>{
       try{
           const size = await Size.findAll();
           res.status(200).json(size);
       }
   catch(err){
       console.log(err);
       res.status(400).send('err en get size');
   }
});

router.post('/category', async(req, res)=>{
    const hola = req.body;

    try {
        const category = await Category.bulkCreate(hola);
        res.status(200).json(category);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post category');
    }
})

router.post('/color', async(req, res)=>{
    const names = req.body;

    try {
        const color = await Color.bulkCreate(names);
        res.status(200).json(color);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post Color');
    }
})

router.post('/size', async(req, res)=>{
    const ids = req.body;

    try {
        const size = await Size.bulkCreate(ids);
        res.status(200).json(size);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post Size');
    }
})

module.exports = router 