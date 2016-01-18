'use strict';

/**
 * Module dependencies.
 */
var db = require('../../db.js');

/**
 * Find track by id
 * Note: This is called every time that the parameter :trackId is used in a URL. 
 * Its purpose is to preload the track on the req object then call the next function. 
 */
exports.track = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Track.find({where: {id: id}}).then(function(track){
        if(!track) {
            return next(new Error('Failed to load track ' + id));
        } else {
            req.track = track;
            return next();            
        }
    }).catch(function(err){
        return next(err);
    });
};

/**
 * Create a track
 */
exports.create = function(req, res) {
    
    // save and return and instance of track on the res object. 
    db.Track.create(req.body).then(function(track){
        if(!track){
            return res.send('/');
        } else {
            return res.jsonp(track);
        }
    }).catch(function(err){
        return res.send('/', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a track
 */
exports.update = function(req, res) {

    // create a new variable to hold the track that was placed on the req object.
    var track = req.track;

    track.updateAttributes({
        artist: req.body.artist,
        album: req.body.album,
        trackTitle: req.body.trackTitle
    }).then(function(a){
        return res.jsonp(a);
    }).catch(function(err){
        return res.render('error', {
            error: err, 
            status: 500
        });
    });
};

/**
 * Delete an track
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the track that was placed on the req object.
    var track = req.track;

    track.destroy().then(function(){
        return res.jsonp(track);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show a track
 */
exports.show = function(req, res) {
    // Sending down the track that was just preloaded by the tracks.track function
    // and saves track on the req object.
    return res.jsonp(req.track);
};

/**
 * List of Tracks
 */
exports.all = function(req, res) {
    db.Track.findAll().then(function(tracks){
        return res.jsonp(tracks);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};