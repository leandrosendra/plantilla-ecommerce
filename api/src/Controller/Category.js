const { Category, Size, Color } = require('../database/db.js');

const getCategory = async(req, res)=>{
    try{
        const category = await Category.findAll();
        res.status(200).json(category);
    }
    catch(err){
        console.log(err);
        res.status(400).send('err en get category');
    }
}

const getColors = async(req,res)=>{
    try{
        const color = await Color.findAll();
        res.status(200).json(color);
    }
    catch(err){
        console.log(err);
        res.status(400).send('err en color');
    }
}

const getSize = async(req,res)=>{
    try{
        const size = await Size.findAll();
        res.status(200).json(size);
    }
    catch(err){
        console.log(err);
        res.status(400).send('err en get size');
    }
}

const postCategory = async(req, res)=>{
    const hola = req.body;
    try {
        const category = await Category.create(hola);
        res.status(200).json(category);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post category');
    }
}

const postColor = async(req, res)=>{
    const names = req.body;
    try {
        const color = await Color.create(names);
        res.status(200).json(color);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post Color');
    }
}

const postSize = async(req, res)=>{
    const ids = req.body;
    try {
        const size = await Size.create(ids);
        res.status(200).json(size);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post Size');
    }
}

module.exports= {
    getCategory,
    getColors,
    getSize,
    postCategory,
    postColor,
    postSize
}