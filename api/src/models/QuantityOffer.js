const { DataTypes} = require ('sequelize')

const QuantityOffer = (sequelize)=> sequelize.define("QuantityOffer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity:{ 
        type: DataTypes.INTEGER
    }
})

module.exports = QuantityOffer; 