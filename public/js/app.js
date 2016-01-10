angular.module('myapp', ['ngRoute']);
/*  Example from Brad:
angular.module('myapp')
.controller('PostsCtrl', ["$scope", "PostsSvc", function ($scope, PostsSvc) {
	var reload = function () {
		PostsSvc.fetch()
		.then(function (posts) {
			$scope.posts = posts
		})
	}
	reload();

	$scope.addPost = function (status) {
		PostsSvc.create({status: status})
		.then(reload) 
	}

	console.info('We in da city!');
}])
*/

angular.module('myapp')
	.controller('TracksCtrl', ["$scope", "TracksSvc", function ($scope, TracksSvc) {

		console.log("Hello from TracksCtrl!");

		$scope.tracklist = TracksSvc.fetchTracks();
    	
		/* Use after api is set up
    	TracksSvc.fetchTracks()
    		.then(function(tracklist){
    			$scope.tracklist = tracklist;
    		});
    	*/	
  			

		/*
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
		*/

}]);

angular.module('myapp')
	.service('TracksSvc', function ($http) {
		this.fetchTracks = function () {

			// return $http.get('/api/tracks')

			// Dummy Data; Remove after integration with db
			return [
				{
					artist: 'Track 1 Artist',
					album: 'Track 1 Album',
					title: 'Track 1 Title'
				},
				{
					artist: 'Track 2 Artist',
					album: 'Track 2 Album',
					title: 'Track 2 Title'
				},
				{
					artist: 'Track 3 Artist',
					album: 'Track 3 Album',
					title: 'Track 3 Title'
				}
			]

			// Use after api is set up
			//.then(function (response) {
			//	return response.data
			//})
		}

		this.create = function (track) {
			// return $http.post('/api/tracks', track)	
		}

	});
// Provides routes for myapp

angular.module('myapp')
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/views/home.html'
			})
			.when('/tracklist', {
				templateUrl: '/views/tracklist.html', 
				controller: 'TracksCtrl'
			})
			.otherwise({ redirectTo: '/' });
});