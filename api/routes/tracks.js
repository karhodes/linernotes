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
	router.delete('/:trackId', tracks.destroy); // Delete a track
   
    /*	

	router.route('/:trackId')
    	.get(tracks.show)
    	.put(tracks.update)
    	.delete(tracks.destroy);
    */	


// Finish with setting up the trackId param
// Note: the tracks.tracks function will be called everytime then it will call the next function.
/*router.param('trackId', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});*/


return router;

};