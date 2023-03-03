const { DataTypes} = require ('sequelize')

const Quantity = (sequelize)=> sequelize.define("Quantity", {
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

module.exports = Quantity; 