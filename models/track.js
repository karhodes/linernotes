var db = require('../db')

module.exports = db.model('Track', {
  status: {type:String, required:true}
})




// *********** Previous Code
/*module.exports = function() {
  console.log("Hello from track model");

  // var db = require('../db.js')();
  // var Sequelize = require('sequelize');
  // var sequelize = db.connection;

  // TO DO:  Delete after Sequelize is setup
  var mongojs = require('mongojs');
  var db = mongojs('tracklist', ['tracklist']);

  var defaultFail = function(err, doc){ console.log('err' + err + doc); };
  var defaultSanitize = function(uncleanData){ return uncleanData; };

  // Find all tracks in DB via mongo
  var _findAll = function (success, fail){
    //db.tracklist.find().then(success).catch(fail);
    //console.log(success);
    console.log('finding all tracks...');
  };  


  // TO DO:  create track table via sequelize

  // TO DO:  Add track to DB

  // TO DO:  Find all tracks in DB via sql
  /*
  var _findAll = function (success, fail){
    order.findAll().then(success).catch(fail);
    console.log(success);
  };
  */

  // TO DO:  Find one track in DB

  // TO DO:  Remove a track from DB

  // TO DO:  Update a track from DB

  // TO DO:  Delete after working model
  /*app.get('/tracklist', function (req, res) {
    console.log("I received a GET request");

    db.tracklist.find(function(err,docs){
    	console.log(docs);
    	res.json(docs);
    });

    //res.sendfile('public/index.html');
})

app.post('/tracklist', function(req, res){
	console.log(req.body);
	db.tracklist.insert(req.body, function(err,doc){
		res.json(doc);
	});
});

app.delete('/tracklist/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.tracklist.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	})
});

app.get('/tracklist/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.tracklist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.put('/tracklist/:id', function(req,res){
	var id = req.params.id;
	console.log(req.body.title);
	db.tracklist.findAndModify({
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
/*
}();*/
