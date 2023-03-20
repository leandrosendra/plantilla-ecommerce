const { DataTypes} = require ('sequelize')
//import {sequelize} from '../database/db.js'

const LikeProduct = (sequelize)=> sequelize.define("LikeProduct", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    like:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
})
 
module.exports = LikeProduct