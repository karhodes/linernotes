// LinerNotes Application: Server 

var express 	= require('express');
var morgan 		= require('morgan');
var app 		= express();
var fs 			= require('fs');
var path 		= require('path');
var router 		= require('./api/routes/tracks.js');
var port 		= process.env.PORT || 7000;

// Logging request details (dev only)
//app.use(morgan('dev'))

// Use the template (partial) views
app.use('/templates', express.static('templates'));

// Set the static files location; 
// for example, /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Allows the browser to GET the bower files
//app.use('/bower', express.static(__dirname + '/bower'));

var db = require('./db.js');

app.use('/tracks',router());

// Routes (would like to glob...)
//app.use('/tracks', require('./api/routes/tracks.js')(express));

// Globbing routing files
//   config.getGlobbedFiles('./api/routes/**/*.js').forEach(function(routePath) {
//      require(path.resolve(routePath))(app);
//    });


// Allows for navigation from other pages than homepage
 app.get('/', function(req, res){
 	res.render('index.html.ejs');
 })

// Start The Server *************************************
var server = app.listen(port, function() {
  console.log('Magic Happens on Port ' + port);
});