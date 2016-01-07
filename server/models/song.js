module.exports = function() {
  console.log("Hello from song model");

  // var db = require('../db.js')();
  // var Sequelize = require('sequelize');
  // var sequelize = db.connection;

  // TO DO:  Delete after Sequelize is setup
  var db = mongojs('songlist', ['songlist']);	

  var defaultFail = function(err, doc){ console.log('err' + err + doc); };
  var defaultSanitize = function(uncleanData){ return uncleanData; };

  // Find all songs in DB via mongo
  var _findAll = function (success, fail){
    db.songlist.find().then(success).catch(fail);
    console.log(success);
  };  


  // TO DO:  create song table via sequelize

  // TO DO:  Add song to DB

  // TO DO:  Find all songs in DB via sql
  /*
  var _findAll = function (success, fail){
    order.findAll().then(success).catch(fail);
    console.log(success);
  };
  */

  // TO DO:  Find one song in DB

  // TO DO:  Remove a song from DB

  // TO DO:  Update a song from DB

  // TO DO:  Delete after working model
  /*app.get('/songlist', function (req, res) {
    console.log("I received a GET request");

    db.songlist.find(function(err,docs){
    	console.log(docs);
    	res.json(docs);
    });

    //res.sendfile('public/index.html');
})

app.post('/songlist', function(req, res){
	console.log(req.body);
	db.songlist.insert(req.body, function(err,doc){
		res.json(doc);
	});
});

app.delete('/songlist/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.songlist.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	})
});

app.get('/songlist/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.songlist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.put('/songlist/:id', function(req,res){
	var id = req.params.id;
	console.log(req.body.title);
	db.songlist.findAndModify({
		query: {_id:mongojs.ObjectId(id)},
		update: {$set: {
			artist: req.body.artist,
			album: req.body.album,
			title: req.body.title 
		}},
		new: true},
		function(err,doc){
			res.json(doc);	
	});
});
*/

}();
