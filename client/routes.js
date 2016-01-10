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