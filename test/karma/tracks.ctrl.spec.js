// Tests for Tracks Controller
// ToDo:  Rerun after api is up & going, update
// Reference:  https://github.com/dickeyxxx/mean-video-7
// Reference:  https://docs.angularjs.org/api/ng/service/$q

describe('myapp', function () {
  beforeEach(module('myapp'))

  describe('TracksCtrl', function () {
    var $scope
    var fakeTracksSvc = {}

    beforeEach(inject(function ($q) {
      fakeTracksSvc.fetchTracks = function () {
        var deferred = $q.defer()
        deferred.resolve(['track a', 'track b'])
        return deferred.promise
      }
    }))

    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new()
      $controller('TracksCtrl', {
        $scope: $scope,
        TracksSvc: fakeTracksSvc
      })
    }))

    it('loads the tracks', function () {
      $scope.$digest()
      expect($scope.tracks).to.have.length(2)
    })
  })
})