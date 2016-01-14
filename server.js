// LinerNotes Application Server 
var express 	= require('express');
var morgan 		= require('morgan');

var app 		= express();
var port 		= process.env.PORT || 7000;

// Logging request details (dev only)
app.use(morgan('dev'))

// Use the template (partial) views
app.use('/templates', express.static('templates'));

// Set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Allows the browser to GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Use api/index.js
app.use('/api', require('./api'))

// Allows for navigation from other than homepage
// Todo:  Change '/' to '*' to accept all page requests
app.get('*', function(req, res){
	res.render('index.html.ejs');
})

// Routes ******************************************************************
// app.use('/tracklist', require('./server/routes/tracklist/find.js')(express));

// Start The Server ******************************************************************
var server = app.listen(port, function() {
  console.log('Magic Happens on Port ' + port);
});