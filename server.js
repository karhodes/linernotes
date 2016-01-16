// LinerNotes Application: Server 

var express 	= require('express');
var morgan 		= require('morgan');
var app 		= express();
var port 		= process.env.PORT || 7000;

// Logging request details (dev only)
app.use(morgan('dev'))

// Use the template (partial) views
app.use('/templates', express.static('templates'));

// Set the static files location; 
// for example, /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Allows the browser to GET the bower files
app.use('/bower', express.static(__dirname + '/bower'));

// Use api/index.js
app.use('/api', require('./api'))

// Allows for navigation from other pages than homepage
app.get('*', function(req, res){
	res.render('index.html.ejs');
})

// Start The Server *************************************
var server = app.listen(port, function() {
  console.log('Magic Happens on Port ' + port);
});