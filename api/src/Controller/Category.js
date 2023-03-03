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
    //createColors()
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
    //createSize()
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

const colors = [

	{
		"id":"Negro"
	},	
	{
		"id":"Blanco"
	},
	{
		"id":"Amarillo"
	},
	{
		"id":"Rojo"
	}

]

const createColors = async()=>{ //index "force: false" sino no anda
    const allColors = await Color.findAll();
    if(!allColors.length){
      await Color.bulkCreate(colors);
    }
}

const size = [

	{
		"id":"S"
	},	
	{
		"id":"M"
	},
	{
		"id":"L"
	},
	{
		"id":"XL"
	},
	{
		"id":"XXL"
	}

]
const createSize = async()=>{ //index "force: false" sino no anda
    const allSize = await Size.findAll();
    if(!allSize.length){
        await Size.bulkCreate(size);
      }
}

module.exports= {
    getCategory,
    getColors,
    getSize,
    postCategory,
    createColors,
    createSize
    
}