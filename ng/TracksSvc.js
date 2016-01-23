// LinerNotes application:  Track Service
// Defines functions between Tracks Controller (ng) and API

angular.module('myapp')
.service('TracksSvc', function ($http) {
	
	// Return all tracks from API ***************************************
	this.fetchTracks = function(){
		return $http.get('/tracks')
		.then(function (response) {
			// console.log(response);
			return response.data;
		});
	};

	// Add a track to the DB via API ************************************
	this.addTrack = function (track) {
		return $http.post('/tracks', track)	
	};

	// Select a single track and pass back to view to update ************
	this.selectTrack = function(id){
		return $http.get('/tracks/' + id)
		.then(function(response){
			console.log(response);
			return response.data;
		});
	};

	// Update a selected track ******************************************
	this.updateTrack = function(track){
		return $http.put('/tracks/update/', track)
		.then(function (response) {
			console.log(response);
			return response.data;
		});
	}

	// Remove a single track from the database **************************
	this.removeTrack = function(id){
		console.log(id);
		return $http.delete('/tracks/' + id);
	};
	
});