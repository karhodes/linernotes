// LinerNotes application:  API Routes for Tracks

module.exports = function () {

	// Module dependencies ***********************************************************
	var path = require('path');
	var express = require('express');
	var router = express.Router();
	var bodyParser = require('body-parser');
	var ejs = require('ejs');

	router.use(bodyParser.json())

	// Controllers for tracks routes *************************************************
	var tracks = require('../controllers/tracks')();

	// Tracks Routes ****************************************************************
	router.get('/', tracks.all); // Get all tracks
	router.post('/', tracks.create); // Create a new track
	router.delete('/:trackId', tracks.destroy); // Destroy a track
	router.get('/:trackId', tracks.show); // Show a single track    
   
    /*	

	router.route('/:trackId')
    	.get(tracks.show)
    	.put(tracks.update)
    	.delete(tracks.destroy);
    */	

return router;

};