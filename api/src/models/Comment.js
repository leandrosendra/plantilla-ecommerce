const { DataTypes}= require( 'sequelize' )


const Comment = (sequelize) => sequelize.define("Comment", {
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

module.exports = Comment