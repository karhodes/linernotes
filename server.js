// LinerNotes Application: Server 

// Application Dependencies:
var express 	= require('express');
var morgan 		= require('morgan');
var app 		= express();
var fs 			= require('fs');
var path 		= require('path');
var router 		= require('./api/routes/tracks.js');
var port 		= process.env.PORT || 7000;

// Socket.io Dependencies
//var http = require('http').Server(app);
//var io = require('socket.io')(http);
var http = require('http');
var socketio = require('socket.io');


// App Configuration **********************************

// Logging request details (dev only)
app.use(morgan('dev'))

// Use the template (partial) views
app.use('/templates', express.static('templates'));

// Set the static files location; 
// for example, /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Allows the browser to GET the bower files
app.use('/bower', express.static(__dirname + '/bower'));

// Require the database file
var db = require('./db.js');

// Tell app which router to use...
app.use('/tracks',router());

// Serve static files **********************************
// Todo:  Incorporate into index.html & views
// Delete these routes once incorporated

// Allows for navigation to the static site
// Variable to refer to the HTML directory
var html_dir = './html/';

// Note: route names need not match the file name
app.get('/static/home', function(req, res) {
    res.sendfile(__dirname + '/public/html/index.html');
});

app.get('/static/search_results', function(req, res) {
    res.sendfile(html_dir + 'search_results.html');
});

app.get('/static/artist_details', function(req, res) {
    res.sendfile(html_dir + 'artist_details.html');
});

app.get('/static/artist_credits', function(req, res) {
    res.sendfile(html_dir + 'artist_credits.html');
});

app.get('/static/track_details', function(req, res) {
    res.sendfile(html_dir + 'track_details.html');
});

// End of static files ********************************

// Allows for navigation from other pages than homepage
app.get('/', function(req, res){
 	res.render('index.html.ejs');
 })

 // Socket.io *****************************************
 // Reference to add more functionality:
 // http://socket.io/get-started/chat/
 // https://vexxhost.com/resources/tutorials/mean-socket-io-integration-tutorial/

 // Socket.io Dependencies
var server = http.createServer(app);
var io = socketio.listen(server);
app.set('socketio', io);
app.set('server', server);


io.on('connection', function(socket){
 	console.log('a user connected');
 	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
 })



// Start The Server *************************************
/*
http.listen(port, function(){
	console.log('Magic Happens on Port ' + port);
})
*/

app.get('server').listen(port, function(){
	console.log('Magic Happens on Port ' + port);
});