const { DataTypes}= require( 'sequelize' )

//import {category} from './Category.js'

const Product = (sequelize) => sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    //category: {
    //    type: DataTypes.STRING
    //},
    stock: {
        type: DataTypes.INTEGER
    },
    picture: {
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER 
    }
})
//Country.belongsToMany(Activity, {through: 'countryActivity'})
//Product.hasMany(category, {
//    foreignKey: 'ProductId',
//    sourceKey:'id'
//})
//
//category.belongsTo(Product, {
//    foreignKey: 'ProductId',
//    targetId: 'id'
//})

module.exports = Product

