const app =require ('./app.js');
const {sequelize} = require ('./database/db.js');
require('dotenv').config();

const port = process.env.PORT || 3005;
console.log(port);

(async ()=> {
    try {
      app.listen(port) 
      await sequelize.sync({force: true});  
      console.log('server running');     
    } catch (error) { 
      console.error('Unable to connect to the database:', error);  
    }
})() 

