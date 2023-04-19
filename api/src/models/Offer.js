const { DataTypes} = require ('sequelize')
//import {sequelize} from '../database/db.js'

const Offer = (sequelize)=> sequelize.define("Offer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.TEXT,
    },
    price:{
        type: DataTypes.INTEGER
    }
})
 
module.exports = Offer