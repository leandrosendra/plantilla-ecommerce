import { DataTypes} from 'sequelize'
import {sequelize} from '../database/db.js'

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
   isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
})
