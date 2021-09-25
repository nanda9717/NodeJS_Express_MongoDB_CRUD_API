const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/node_crud_api'
const app = express();

mongoose.connect(url, {useNewUrlParser:true} )
const con = mongoose.connection;

con.on('open', function(){
    console.log('Connected...');
});

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(9000, function(){
    console.log("Server Started..");
});