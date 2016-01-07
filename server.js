// LinerNotes Application Server | NPM Modules **********************************
// Located in the node_modules [use npm install to update from package.json]
var express 	= require('express');
var bodyParser 	= require('body-parser');
// var dotenv 		= require('dotenv').load();
// var mysql 		= require('mysql');

// To do:  Delete after sequelize is working
var mongojs		= require('mongojs');

// Initialize Application ******************************************************
var app 		= express();
var port 		= process.env.PORT || 7000;

// Middleware ******************************************************************

// For parsing application/json
app.use(bodyParser.json());

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Routes ******************************************************************
// example:
app.use('/songlist', require('./server/routes/songlist/find.js')(express));

// Start The Server ******************************************************************
var server = app.listen(port, function() {
  console.log('Magic Happens on Port ' + port);
});