import Sequelize from 'sequelize';

export const sequelize = new Sequelize('plantillas', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})
