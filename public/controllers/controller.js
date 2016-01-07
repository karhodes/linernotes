angular.module('myApp', [])
	.controller('ctrl1', ['$scope', '$http', function($scope, $http) {
	
	console.log("Hello World from Controller 1!");	
	
	/*var refresh = function(){
		$http.get('/songlist').success(function(response){
			console.log("I got the data I requested");
			$scope.songlist = response;
			$scope.song = "";
		});
	};

	refresh();
	*/
	/*

	$scope.addSong = function(){
		console.log($scope.song);
		$http.post('/songlist', $scope.song).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.removeSong = function(id){
		console.log(id);
		$http.delete('/songlist/' + id).success(function(response){
			refresh();
		});
	};

	$scope.editSong = function(id){
		console.log(id);
		$http.get('/songlist/' + id).success(function(response){
			$scope.song = response;
		});
	};

	$scope.updateSong = function(){
		console.log($scope.song._id);
		$http.put('/songlist/' + $scope.song._id, $scope.song).success(function(response){
			refresh();
		});
	};

	$scope.deselectSong = function(){
		$scope.song = "";
	}
	*/

}]);	
