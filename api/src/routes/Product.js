const { Router } = require("express");
const { Product, Category } = require("../database/db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { name, description, stock, image, price, categoryId } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      stock,
      image,
      price,
    });
    product.setCategory(categoryId);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, image, stock, description } = req.body;
  try {
    const product = await Product.findByPk(id);
    product.name = name;
    product.price = price;
    product.image = image;
    product.description = description;
    product.stock = stock;

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
