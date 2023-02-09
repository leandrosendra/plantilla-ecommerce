const { DataTypes} = require ('sequelize')
//import {sequelize} from '../database/db.js'

const cart = (sequelize)=> sequelize.define("Cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = cart