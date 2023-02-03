import { DataTypes} from 'sequelize' 
import {sequelize} from '../database/db.js'
import {category} from './Category.js'

export const Product = sequelize.define('products', {
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

