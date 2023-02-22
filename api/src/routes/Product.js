const { Router } = require("express");
const { Product, Category, Gender, Size, Color } = require("../database/db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Category, 
        },
        {
          model: Color, 
        },
        {
          model: Size, 
        }
      ]
    });
    res.status(200).json(product); 
  } catch (err) {
    console.log(err);
  }
});

router.get('/category', async(req,res)=>{
       try{
           const c = await Category.findAll();
           res.status(200).json(c);
       }
   catch(err){
       console.log(err);
       res.status(400).send('no funco category');
   }
});

router.post("/", async (req, res) => {
  const { name, description, stock, image, price, categoryId, ColorId, SizeId } = req.body;

  try {
    const product = await Product.create({  
      name,
      description,
      stock,
      image, 
      price
    });
    product.setCategory(categoryId);
    product.addColors(ColorId);
    product.addSize(SizeId);
    //console.log(product);  
    res.status(200).json(product); 
  } catch (err) {  
    console.log(err); 
  }
});
 
router.post('/bulk', async(req,res)=>{
  const bulk = req.body;
  try {
    const products = await Product.bulkCreate(bulk)
    res.status(200).json(products) 
    console.log(products)
  } catch (err) {
      console.log(err);
      console.log('err create user for bulk'); 
  }
});

router.put("/:id", async (req, res) => { 
  const { id } = req.params;
  const { name, price, image, stock, description } = req.body;
  //console.log(id);
  try {
    const product = await Product.findByPk(id);
    product.name = name; 
    //product.price = price;
    //product.image = image;
    //product.description = description;
    //product.stock = stock;
   //product.addColors(idColor);
    await product.save(); 
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.destroy({
      where: { id: id },
    });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
