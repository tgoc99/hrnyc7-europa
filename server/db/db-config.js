var mongoose = require('mongoose');

// connect to database at europaDB
var dbURI = 'mongodb://localhost/europaDB';
mongoose.connect(dbURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
