// Provides routes for myapp

angular.module('myapp')
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/templates/home.html'
			})
			.when('/tracklist', {
				templateUrl: '/templates/tracklist.html', 
				controller: 'TracksCtrl'
			})
			.otherwise({ redirectTo: '/' });
});