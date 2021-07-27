const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/**
 * Database Setup
 */

mongoose.connect('mongodb+srv://rootdb:Nses100@cluster0.6fokl.mongodb.net/myFirstDatabase?retryWrites=true ,{

})



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);