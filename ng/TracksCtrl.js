// LinerNotes application:  Track Controller
// Defines functions between the Tracks view and the Tracks Service (ng)

angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {
		
		var refresh = function(){
			TracksSvc.fetchTracks()
			.then(function (tracks) {
    			$scope.tracklist = tracks
  			})
		}

		refresh();

		$scope.addTrack = function(status) {
			console.log($scope.track);
			TracksSvc.addTrack($scope.track);
			.then(refresh);
		}


}]);
