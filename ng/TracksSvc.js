angular.module('myapp')
.service('TracksSvc', function ($http) {

	console.log("hello from Tracks Svc");

	this.fetchTracks = function () {
		return $http.get('/api/tracks')
		.then(function (response) {
			return response.data
		})
	}	
})