import app from './app.js'
import {sequelize} from './database/db.js'

(async ()=> {
    try {
        await sequelize.sync({force: false}); 
        app.listen(3001)
        console.log('server running');    
      } catch (error) {
        console.error('Unable to connect to the database:', error); 
      }
})() 

//main()