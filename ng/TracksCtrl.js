angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {

		console.log("Hello from TracksCtrl!");
		TracksSvc.fetchTracks()
		.then(function (tracks) {
    		$scope.tracklist = tracks
  })

}]);
