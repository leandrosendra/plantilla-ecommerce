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


const sequelize = new Sequelize(NAME_BD, USER_DB, PASS_DB, {
    host: HOST_DB,
    dialect: 'postgres', 
    logging:false 
});
//const bd = new Sequelize (`postgres://postgres:root@localhost:5432/plantillas`,{ logging:false });

productM(sequelize);
categoryM(sequelize)
cartM(sequelize)
userM(sequelize)
commentM(sequelize)

const{ Product, Category, Cart, User, Comment} = sequelize.models;
 
//console.log(sequelize.models)

Product.belongsTo(Category);
Category.hasMany(Product);

Cart.belongsToMany(Product, {through: 'cart_product'})
Product.belongsToMany(Cart, {through: 'cart_product'})

Cart.belongsTo(User)
User.hasMany(Cart)


module.exports = {sequelize, ...sequelize.models};



