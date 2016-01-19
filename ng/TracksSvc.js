// LinerNotes application:  Track Service
// Defines functions between Tracks Controller (ng) and API

angular.module('myapp')
.service('TracksSvc', function ($http) {

	console.log("Hello from Tracks Service!");
	
	// Return all tracks from API *********************************
	this.fetchTracks = function(){
		return $http.get('/tracks')
		.then(function (response) {
			console.log(response);
			return response.data
		});
	};

	// Add a track to the DB via API *********************************
	this.addTrack = function (track) {
		console.log(track);
		return $http.post('/tracks', track)	
	}

	// this.updateTrack = function(){}

	// this.deselectTrack = function(){}

	// this.removeTrack = function(track._id){}

	// this.editTrack = function(track._id){}


})