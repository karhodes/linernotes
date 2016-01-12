// LinerNotes Application Server 
var express 	= require('express');
var bodyParser 	= require('body-parser');
var morgan 		= require('morgan');
// var dotenv 	= require('dotenv').load();
// var mysql 	= require('mysql');

// To do:  Delete after sequelize is working
// var mongojs		= require('mongojs');

var app 		= express();
var port 		= process.env.PORT || 7000;

// Logging request details (dev only)
app.use(morgan('dev'))

// For parsing application/json
app.use(bodyParser.json());

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the template (partial) views
app.use('/templates', express.static('templates'));

// Set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Allows the browser to GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Allows for navigation from other than homepage
app.get('/', function(req, res){
	res.render('index.html.ejs');
})

// Routes ******************************************************************
app.use('/tracklist', require('./server/routes/tracklist/find.js')(express));

// Start The Server ******************************************************************
var server = app.listen(port, function() {
  console.log('Magic Happens on Port ' + port);
});