// LinerNotes application:  Track Controller
// Defines functions between the Tracks view and the Tracks Service (ng)

angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {
		
		// Refresh the page ****************************************************
		// Call fetchTracks() from the Track Service to grab all tracks from API
		// Populate $scope.tracklist with the tracks from API
		var refresh = function(){
			TracksSvc.fetchTracks()
			.then(function (tracks) {
    			$scope.tracklist = tracks;
    			$scope.track = "";
  			})
		}

		refresh();

		// Add a track ********************************************************
		// Call addTrack() from the Track Service and pass in $scope.track
		$scope.addTrack = function(){
			TracksSvc.addTrack($scope.track);
			refresh();
		};

		// Select a single track ********************************************************
		// Call selectTrack() from the Track Service
		$scope.selectTrack = function(id){
			console.log("Hello from selectTrack!");
			console.log(id);
			//TracksSvc.selectTrack();
			// refresh();
		};

		// Remove a single track ********************************************************
		$scope.removeTrack = function(id){
			TracksSvc.removeTrack(id);
			refresh();
		};
}]);
