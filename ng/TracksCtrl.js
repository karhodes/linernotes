// LinerNotes application:  Track Controller

angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {
		TracksSvc.fetchTracks()
		.then(function (tracks) {
    		$scope.tracklist = tracks
  })
}]);
