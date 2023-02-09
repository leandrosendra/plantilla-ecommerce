const { DataTypes}= require( 'sequelize' )


const Product = (sequelize) => sequelize.define("Product", {
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
    stock: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER 
    }
})

module.exports = Product

