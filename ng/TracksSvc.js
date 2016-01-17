// LinerNotes application:  Track Service

angular.module('myapp')
.service('TracksSvc', function ($http) {

	console.log("Hello from Tracks Service!");
	
	this.fetchTracks = function () {
		return $http.get('/api/tracks')
		.then(function (response) {
			console.log(response);
			return response.data
		})
	}	
})