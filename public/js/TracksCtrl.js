angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {

		console.log("Hello from TracksCtrl!");

		var refresh = function(){
				$http.get('/tracklist').success(function(response){
					console.log("I got the data I requested");
					$scope.tracklist = response;
					$scope.track = "";
				});
			};

		refresh();	

		$scope.addTrack = function(){
			console.log($scope.track);
			$http.post('/tracklist', $scope.track).success(function(response){
				console.log(response);
				refresh();
			});
		};

		$scope.removeTrack = function(id){
			console.log(id);
			$http.delete('/tracklist/' + id).success(function(response){
				refresh();
			});
		};

		$scope.editTrack = function(id){
			console.log(id);
			$http.get('/tracklist/' + id).success(function(response){
				$scope.track = response;
			});
		};

		$scope.updateTrack = function(){
			console.log($scope.track._id);
			$http.put('/tracklist/' + $scope.track._id, $scope.track).success(function(response){
				refresh();
			});
		};

		$scope.deselectTrack = function(){
			$scope.track = "";
		}

}]);
