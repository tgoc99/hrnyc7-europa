var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var request = require('request');


var app = express();
var port = process.env.PORT || 8080;

//set up mongodb
var db = require('./db/db-config.js');

app.use(bodyParser.json());
app.use(morgan('tiny'));


//serve up static files
app.use(express.static(__dirname + '/../client'));


//set up routes
var routes = require('./routes/routes.js')(app, express);


app.listen(port);
console.log('server listening on port ' + port);
console.log('serving static files from' + __dirname + '/../client');