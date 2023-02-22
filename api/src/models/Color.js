const { DataTypes} = require ('sequelize')

const Color = (sequelize)=> sequelize.define("Color", {

  id:{
        type: DataTypes.STRING,
        primaryKey: true
    }
})

module.exports = Color 