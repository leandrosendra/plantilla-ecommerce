const express = require ('express');
const routes = require ('./routes/index.js');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { createColors, createSize } = require('./Controller/Category.js');
//require('./routes/Categories.js');



app.use(express.json());
app.use(cors());

createColors();
createSize();

app.use("/", routes);

 
module.exports = app 