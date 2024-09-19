# NodeJS_Express_MongoDB_CRUD_API
Create CRUD APIs using Node JS, Express and MongoDB

## Initialize a new Node.js project
npm init

## Install the required dependencies
npm install express mongoose

## Set up the MongoDB database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/node_crud_api', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});
