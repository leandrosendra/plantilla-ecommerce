const { DataTypes} = require ('sequelize')

const Size = (sequelize)=> sequelize.define("Size", {

    id: {
        type: DataTypes.STRING,
        primaryKey: true
    }
})

module.exports = Size