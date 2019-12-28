//var mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://admin:admin@animea-autenticacion-ovq5c.mongodb.net/test?retryWrites=true&w=majority');

const mongoose = require('mongoose');

const SERVER = 'animea-autenticacion-ovq5c.mongodb.net';
const DATABASE = 'test';
const USER = 'admin';
const PASSWORD = 'admin';
const OPTIONS = 'retryWrites=true&w=majority';

function connect() {
  mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${SERVER}/${DATABASE}?${OPTIONS}`);
}

module.exports.connect = connect;