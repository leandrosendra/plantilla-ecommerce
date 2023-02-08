const {Sequelize} =require ('sequelize');
//import product from '../models/Product.js' 
//import category from '../models/Category.js' 
const productM = require ('../models/Product.js');
const categoryM = require ('../models/Category.js');


const sequelize = new Sequelize('plantillas', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false 
});
//const bd = new Sequelize (`postgres://postgres:root@localhost:5432/plantillas`,{ logging:false });

productM(sequelize);
categoryM(sequelize)

const{ Product, Category} = sequelize.models;
 
//console.log(sequelize.models)

Product.belongsTo(Category);
Category.hasMany(Product);


module.exports = {sequelize, ...sequelize.models};



