angular.module('myApp', [])
	.controller('ctrl1', ['$scope', '$http', function($scope, $http) {
	
	console.log("Hello World from Controller 1!");	

	$http.get('/songlist').success(function(response){
		console.log("I got the data I requested");
		$scope.songlist = response;
	});

	

}]);	
