angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {

		console.log("Hello from TracksCtrl!");

		$scope.tracklist = TracksSvc.fetchTracks();

}]);
