var express = require('express');
var mongoose = require('mongoose');
var connert = require('./db/db.js');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/'));
var router = express.Router();


app.use('/api', router);
app.listen(process.env.PORT || 3000, function (){
    console.log('Server started!')
})