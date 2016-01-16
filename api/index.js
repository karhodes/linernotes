// Dependencies for api
var router = require('express').Router()
var bodyParser = require('body-parser')
var mysql 	= require('mysql');
var Sequelize = require('sequelize');

// Models required for api
var Track = require('../models/track')

router.use(bodyParser.json())

// ****************************************************************
// Get all tracks from api
router.get('/tracks', function(req,res,next){
	res.send("Hello!");
	//Track.findAll()
	//.sort('-date')
	// if large db do ensure index
	/*
	.exec(function(err, tracks){
		if(err){next(err)}
		res.json(tracks)
	})*/
})

// Post a new Track
router.post('/tracks', function (req, res, next) { 
	var track = new Track({
		artist: req.body.artist,
		album: req.body.album, 
		trackTitle: req.body.trackTitle
  })
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