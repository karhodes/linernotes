// LinerNotes application: provides routes for myapp

angular.module('myapp')
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/templates/home.html'
			})
			.when('/tracks', {
				templateUrl: '/templates/tracks.html', 
				controller: 'TracksCtrl'
			})
			.otherwise({ redirectTo: '/' });
});