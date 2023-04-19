const { DataTypes} = require ('sequelize')

const QuantityCart = (sequelize)=> sequelize.define("QuantityCart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity:{ 
        type: DataTypes.INTEGER,
       // primaryKey: true
    }
})

module.exports = QuantityCart; 