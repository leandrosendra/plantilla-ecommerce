const { Product, Category, Gender, Size, Color, Comment, User } = require("../database/db.js");


  const getProduct = async (req, res) => {
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
        ],
        order: [['id', 'ASC']]
      });
      res.status(200).json(product); 
    } catch (err) {
      console.log(err);
    }
  }

  const getProductId = async (req, res) =>{
    const {idProduct} = req.params;

    try {
      console.log(idProduct);
      const prod = await Product.findOne({
        where:{
          id:idProduct
        },
        include:[
          { 
            model:Comment,
            attributes: { exclude: ['UserId','ProductId'] },
            //order: [['date', 'DESC']],
            include:[
              { model: User,
                attributes:["name", "email"]
              },
            ],
          },
        ]
      })
      res.status(200).json(prod);
    } catch (err) {
      console.log(err);      
    }
  }

  const postPrduct = async (req, res) => {
    const { name, brand, genero, description, stock, image, price, categoryId, ColorId, SizeId } = req.body;
    try {
      const product = await Product.create({  
        name,
        description,
        stock,
        image, 
        price,
        brand,
        genero
      });
      product.setCategory(categoryId);
      product.addColors(ColorId);
      product.addSize(SizeId);
      res.status(200).json(product); 
    } catch (err) {  
      console.log(err); 
    }
  }

  const bulkProduct = async(req,res)=>{
      const bulk = req.body;
      try {
        const products = await Product.bulkCreate(bulk)
        res.status(200).json(products) 
        //console.log(products)
      } catch (err) {
          console.log(err);
          console.log('err create user for bulk'); 
      }
    }

  const putProuct = async (req, res) => { 
    const { id } = req.params;
    const { name, price, image, stock, description } = req.body;
    //console.log(id);
    try {
      const product = await Product.findByPk(id);
      product.name = name; 
      product.price = price;
      product.image = image;
      product.description = description;
      product.stock = stock;
      product.addColors(idColor);
      await product.save(); 
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
    }
  }

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.destroy({
        where: { id: id },
      });
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {
    getProduct,
    getProductId,
    postPrduct,
    bulkProduct,
    putProuct,
    deleteProduct
}

/*
JSON Colors, Size
Ver lo del carrito y Offert

*/