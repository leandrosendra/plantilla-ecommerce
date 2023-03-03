const express = require ('express');
const routes = require ('./routes/index.js');
const app = express();
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');



//require('./routes/Categories.js');



app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/", routes);

 
module.exports = app 