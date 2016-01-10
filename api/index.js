var router = require('express').Router();
var bodyParser = require('body-parser');
var Post = require('../server/models/song');

router.use(bodyParser.json())

router.get('/tracks', function (req,res,next) {
	Post.find()
	.sort('-date')
	.exec(function (err,posts) {
		if (err) { next(err) }
		res.json(posts)
	})
})

router.post('/tracks', function (req,res,next) {
	var track = new Track({status: req.body.status})
	// track.createIndex({'stat':1}, {unique:true})
	track.save(function (err) {
		if (err) { next(err) }
		//console.info("### Post Saved ###") 
		res.status(201).end()
	})
});

router.get('*', function (req,res) {
	res.status(404).end()
})

module.exports = router;