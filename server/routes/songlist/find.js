// API for finding all songs

console.log("Hello from songlist find.js");

module.exports = function (express) {
  var router = express.Router();
  var song = require('../../models/song.js');

  // /songlist/find
  router.post('/find', function(req, res) {
    res.send("hello");

    /*
    var serverMessage = "Your find request is being processed";
    var serverResponse = "You've encountered an unknown error";

    // Request made from client
    var clientFindPost = req.body;

    song.findAll(function(data) {

      // Server message of the request
      console.log('A find request for all songs has been made');

      res.json({
        serverMessage: serverMessage,
        serverResponse: serverResponse,
        songlist: data
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
