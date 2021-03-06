var express = require('express');
var app = express();
var db = require('./db');
const bodyParser = require('body-parser');

global.__root   = __dirname + '/'; 
app.use(bodyParser.json());

db.connect();

// Preventing CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');

  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      return res.status(200).json({});
  }
  
  next();
});

app.get('/api/v1', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/v1/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/v1/auth', AuthController);

module.exports = app;