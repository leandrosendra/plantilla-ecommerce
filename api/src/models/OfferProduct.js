const { DataTypes} = require ('sequelize')

const OfferProduct = (sequelize)=> sequelize.define("OfferProduct", {

    quantity:{
        type: DataTypes.INTEGER,
    }
})

module.exports = OfferProduct;