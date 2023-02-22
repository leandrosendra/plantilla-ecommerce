const express = require ('express');
const routes = require ('./routes/index.js');
const app = express();
const cors = require('cors');
require('dotenv').config();
//require('./routes/Categories.js');



app.use(express.json());
app.use(cors());

app.use("/", routes);

 
module.exports = app 