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
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Sin Genero'),
			defaultValue: 'Sin Genero'
    },
    image: { 
        type: DataTypes.STRING
    },
    brand:{
        type: DataTypes.STRING
    },
    stock:{
        type: DataTypes.INTEGER,
    },
    //color,Size,Category
    price:{
        type: DataTypes.INTEGER 
    }
})

module.exports = Product

