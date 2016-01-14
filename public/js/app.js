angular.module("myapp",["ngRoute"]);
angular.module("myapp").controller("TracksCtrl",["$scope","TracksSvc",function(c,r){r.fetchTracks().then(function(r){c.tracklist=r})}]);
angular.module("myapp").service("TracksSvc",["$http",function(t){this.fetchTracks=function(){return t.get("/api/tracks").then(function(t){return t.data})}}]);
angular.module("myapp").config(["$routeProvider","$locationProvider",function(e,t){t.html5Mode(!0),e.when("/",{templateUrl:"/templates/home.html"}).when("/tracks",{templateUrl:"/templates/tracks.html",controller:"TracksCtrl"}).otherwise({redirectTo:"/"})}]);