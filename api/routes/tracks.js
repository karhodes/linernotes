// LinerNotes application:  Routes for tracks

module.exports = function () {

	console.log("Hello from router!");

	// Module dependencies
	var path = require('path');
	var express = require('express');
	var router = express.Router();
	var ejs = require('ejs');

	// Controllers for tracks routes
	var tracks = require('../controllers/tracks');

	// Tracks Routes
	router.get('/', function(req,res){
		res.send("Brandy is awesome!");
	});

	router.route('/')
    	.get(tracks.all);

    /*	
    	.post(tracks.create);
	router.route('/:trackId')
    	.get(tracks.show)
    	.put(tracks.update)
    	.delete(tracks.destroy);
    */	


// Finish with setting up the trackId param
// Note: the tracks.tracks function will be called everytime then it will call the next function.
//router.param('trackId', tracks.track);

return router;

};