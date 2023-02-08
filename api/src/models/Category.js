const { DataTypes} = require ('sequelize')
//import {sequelize} from '../database/db.js'

const category = (sequelize)=> sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
})

module.exports = category