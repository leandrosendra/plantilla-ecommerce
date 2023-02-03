import { DataTypes} from 'sequelize'
import {sequelize} from '../database/db.js'

export const category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
})

