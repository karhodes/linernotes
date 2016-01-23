// LinerNotes application:  Track Controller
// Defines functions between the Tracks view and the Tracks Service (ng)

angular.module('myapp')
	// Socket.io reference:
	// http://charandeepmatta.com/2014/06/08/integrating-socket-io-with-mean/
	// https://vexxhost.com/resources/tutorials/mean-socket-io-integration-tutorial/
	.factory('mySocket', function(socketFactory) {
    	return socketFactory();
	})

	.controller('TracksCtrl', ["$scope", "TracksSvc", "mySocket", function ($scope, TracksSvc, mySocket) {
		
		// Refresh the page *********************************************************
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

		// Add a track **************************************************************
		// Call addTrack() from the Track Service and pass in $scope.track
		$scope.addTrack = function(){
			TracksSvc.addTrack($scope.track);
			refresh();
		};

		// Listening for the article.created event; sending track to the console
		/*Socket.on('article.created', function(track) {
    		console.log(track);
		});*/


		// Select a single track *****************************************************
		// Call selectTrack() from the Track Service, pass in track's id
		$scope.selectTrack = function(id){
			TracksSvc.selectTrack(id)
			.then(function(track){
				$scope.track = track;
			})			
		};

		// Remove a single track ****************************************************
		// Call removeTrack() from the Track Service, pass in the track's id
		$scope.removeTrack = function(id){
			TracksSvc.removeTrack(id);
			refresh();
		};

		// Update a selected track **************************************************
		// Call 
		$scope.updateTrack = function(){
			TracksSvc.updateTrack($scope.track);
			refresh();
		}

		// Deslect a track (remove from form fields) *********************************
		// Todo:  Define this
}]);
