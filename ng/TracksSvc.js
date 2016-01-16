// LinerNotes application:  Track Service

angular.module('myapp')
.service('TracksSvc', function ($http) {
	
	this.fetchTracks = function () {
		return $http.get('/api/tracks')
		.then(function (response) {
			return response.data
		})
	}	
})