const {Sequelize} =require ('sequelize');
require('dotenv').config();
const {
    NAME_BD,
    USER_DB,
    PASS_DB,
    HOST_DB
}= process.env
const productM = require ('../models/Product.js');
const categoryM = require ('../models/Category.js');
const cartM = require ('../models/Cart.js');
const userM = require ('../models/User.js');
const commentM = require ('../models/Comment.js');
const offerM = require ('../models/Offer.js');
const colorM = require ('../models/Color.js');
const sizeM = require ('../models/Size.js');
const offerProductM = require ('../models/OfferProduct.js');
const quantityM = require ('../models/QuantityCart.js');


const sequelize = new Sequelize(NAME_BD, USER_DB, PASS_DB, {
    host: HOST_DB,
    dialect: 'postgres', 
    define: {timestamps: false},
    logging:false 
});
//const bd = new Sequelize (`postgres://postgres:root@localhost:5432/plantillas`,{ logging:false });

productM(sequelize);
categoryM(sequelize);
cartM(sequelize);
userM(sequelize);
commentM(sequelize);
offerM(sequelize);
colorM(sequelize);
sizeM(sequelize);
offerProductM(sequelize);
quantityM(sequelize);

const{ Product, Category, Color, Size, User, Cart, Comment, Offer, OfferProduct, Quantity } = sequelize.models;
 
//console.log(sequelize.models)

Product.belongsTo(Category);
Category.hasMany(Product);

Color.belongsToMany(Product, {through: 'color_product'})
Product.belongsToMany(Color, {through: 'color_product'})

Size.belongsToMany(Product, {through: 'size_product'})
Product.belongsToMany(Size, {through: 'size_product'})



// Cart.belongsTo(Quantity);
// Quantity.hasMany(Cart);

Quantity.belongsTo(Offer);      
Offer.hasMany(Quantity);

Quantity.belongsTo(Product);
Product.hasMany(Quantity);

//Cart.belongsToMany(Product, {through: 'cart_product'})
//Product.belongsToMany(Cart, {through: 'cart_product'})




Cart.belongsTo(User)
User.hasMany(Cart)
//promo -> namePromocional, [1 o + Productos, ... ] , PricePromocional,






module.exports = {sequelize, ...sequelize.models};



