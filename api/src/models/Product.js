import { DataTypes} from 'sequelize'
import {sequelize} from '../database/db.js'

export const Product = sequelize.define('products', {
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
    category: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    },
    picture: {
        type: DataTypes.STRING
    }

})

