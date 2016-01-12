// API for finding all tracks

console.log("Hello from tracklist find.js");

module.exports = function (express) {
  var router = express.Router();
  var track = require('../../models/track.js');

  // /tracklist/find
  router.post('/find', function(req, res) {
    res.send("hello");

    /*
    var serverMessage = "Your find request is being processed";
    var serverResponse = "You've encountered an unknown error";

    // Request made from client
    var clientFindPost = req.body;

    track.findAll(function(data) {

      // Server message of the request
      console.log('A find request for all tracks has been made');

      res.json({
        serverMessage: serverMessage,
        serverResponse: serverResponse,
        tracklist: data
      });
    },

    function(err){
      res.json({
        serverMessage: serverMessage,
        serverResponse: serverResponse,
        ServerError: err
      });
    });*/
  });

  return router;
  
};
