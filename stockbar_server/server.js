// Create an HTTP server by loading http module
var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/bardb')

// express app will use body-parser to get data from POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

// Set port
var port = process.env.PORT || 8080;        // set the port

// Define a prefix for all routes
// Can define something unique like MyRestAPI
// We'll just leave it so all routes are relative to '/'
app.use('/', routes);

// Start server listening on port 8080
app.listen(port);
console.log('RESTAPI listening on port: ' + port);
