// Dependencies for api
var router = require('express').Router()
var bodyParser = require('body-parser')
var mysql 	= require('mysql');
var Sequelize = require('sequelize');

// Models required for api
var Track = require('../models/track')

router.use(bodyParser.json())

// ****************************************************************
// Get all tracks from api
router.get('/tracks', function(req,res,next){
	console.log("Hello from index api / tracks!");
	
	var tracks = Track.findAll();
	console.log(tracks);
	res.json(tracks);
	
	/*.exec(function(err, tracks){
		if(err){next(err)}
		res.json(tracks)
	})*/
})

// Post a new Track
router.post('/create', function (req, res, next) { 

	console.log("Hello from api / create");

	var serverMessage = "Your track is being created";
	var serverResponse = "Your track was successfully created";

	// Dummy data
	var clientTrackPost = {
		"artist" : "artist1",
		"album" : "album1",
		"track" : "track1"
	}

	//var clientTrackPost = req.body;
	console.log(clientTrackPost);

	Track.create({
		artist: clientTrackPost.artist,
		album: clientTrackPost.album, 
		track: clientTrackPost.track
  	});
});  	


// Send 404 response if something other than a defined route is pinged
/*router.get('*', function (req, res) {
  res.status(404).end()
})
*/

module.exports = router