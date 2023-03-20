const { DataTypes}= require( 'sequelize' )


const Comment = (sequelize) => sequelize.define("Comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comments: {
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.STRING
    }
})

module.exports = Comment