// Dependencies for api
var router = require('express').Router()
var bodyParser = require('body-parser')

// Models required for api
var Track = require('../models/track')

router.use(bodyParser.json())

router.get('/tracks', function(req,res,next){
	Track.find()
	//.sort('-date')
	// if large db do ensure index
	.exec(function(err, tracks){
		if(err){next(err)}
		res.json(tracks)
	})
})

router.post('/tracks', function (req, res,next) {
  
  var track = new Track({status: req.body.status})
  track.save(function (err) {
    if (err) { next(err) }
    res.status(201).end()
  })

})

// Send 404 response if something other than a defined route is pinged
router.get('*', function (req, res) {
  res.status(404).end()
})

module.exports = router