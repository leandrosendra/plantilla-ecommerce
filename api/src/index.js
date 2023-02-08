const app =require ('./app.js');
const {sequelize} = require ('./database/db.js');

(async ()=> {
    try {
      app.listen(3001)
      await sequelize.sync({force: true}); 
      console.log('server running');    
    } catch (error) {
      console.error('Unable to connect to the database:', error);  
    }
})() 

//main()