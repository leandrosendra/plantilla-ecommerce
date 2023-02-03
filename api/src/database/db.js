import Sequelize from 'sequelize';
 
export const sequelize = new Sequelize('plantillas', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})
