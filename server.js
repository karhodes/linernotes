// Modules =================================================
var express        	= require('express');
var path 			= require('path');
var app            	= express();
var mongojs			= require('mongojs');
var bodyParser     	= require('body-parser');
// var methodOverride 	= require('method-override');


// Configuration ===========================================
var db = mongojs('songlist', ['songlist']);	


// set our port
var port = process.env.PORT || 7000; 

// get all data of the body (POST) parameters
// parse application/json
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json 
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

app.get('/songlist', function (req, res) {
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

// routes ==================================================
// pass our application into our routes
//require('./app/routes')(app); 

// start app ===============================================
app.listen(port);	

// shoutout to the user
console.log('Magic happens on port ' + port); 	

// expose app		
exports = module.exports = app; 						