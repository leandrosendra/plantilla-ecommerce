const {Sequelize} =require ('sequelize');
const productM = require ('../models/Product.js');
const categoryM = require ('../models/Category.js');
const cartM = require ('../models/Cart.js');
const userM = require ('../models/User.js');


const sequelize = new Sequelize('plantillas', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false 
});
//const bd = new Sequelize (`postgres://postgres:root@localhost:5432/plantillas`,{ logging:false });

productM(sequelize);
categoryM(sequelize)
cartM(sequelize)
userM(sequelize)

const{ Product, Category, Cart, User} = sequelize.models;
 
//console.log(sequelize.models)

Product.belongsTo(Category);
Category.hasMany(Product);

Cart.belongsToMany(Product, {through: 'cart_product'})
Product.belongsToMany(Cart, {through: 'cart_product'})

Cart.belongsTo(User)
User.hasMany(Cart)


module.exports = {sequelize, ...sequelize.models};



