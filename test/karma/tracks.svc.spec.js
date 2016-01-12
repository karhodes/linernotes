// Tests for Tracks Service
// Todo:  Update once API is running
// Reference:  https://github.com/dickeyxxx/mean-video-6

describe('myapp', function(){
	var TracksSvc, $httpBackend

	beforeEach(inject(function(_TracksSvc_, $_httpBackend_){
		TracksSvc = _TracksSvc_
		$httpBackend = _$httpBackend_
	})
	
	beforeEach(function(){
		$httpBackend.when('GET', /*apiroute*/ )
		.respond('response goes here')
	})

	afterEach(function(){
		$httpBackend.flush();
	})

	it('fetches tracks', function(){
		TracksSvc.fetchTracks()
		.then(function(tracks){
			expect(tracks).to.have.length(2)
		})
			
	})
	
})