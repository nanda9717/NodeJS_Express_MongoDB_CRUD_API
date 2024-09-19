const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/node_crud_api'
const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);
app.use('*', async (req, res)=>{
  res.json({
    message: "Invalid Path",
    status: 400
  })
});

app.listen(9000, function(){
    console.log("Server Started.. - http://localhost:9000/");
});