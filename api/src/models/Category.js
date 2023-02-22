const { DataTypes} = require ('sequelize')
//import {sequelize} from '../database/db.js'

const category = (sequelize)=> sequelize.define("Category", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    }
})

module.exports = category
