angular.module('myapp')
	.service('TracksSvc', function ($http) {
		this.fetchTracks = function () {

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
			];

			// return $http.get('/api/tracks')
			//.then(function (response) {
			//	return response.data
			//})
		}

		this.create = function (track) {
			// return $http.post('/api/tracks', track)	
		}

	});