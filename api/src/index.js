import app from './app.js'
import {sequelize} from './database/db.js'

import './models/Product.js'

async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(3000)
        console.log('server running');    
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main()