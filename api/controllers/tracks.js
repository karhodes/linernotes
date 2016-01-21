// LinerNotes Application:  API Controller for Tracks
'use strict';

module.exports = function() {     

    // Module dependencies ***********************************************************
    var db = require('../../db.js');

    // Create an entry (track) in the DB *********************************************
    exports.create = function(req, res, next) {
        db.Track.create({
            artist : req.body.artist,
            album : req.body.album,
            trackTitle : req.body.trackTitle
        }).then(function(){
            res.redirect('/');
        });
    };

    // Update a track ****************************************************************
    exports.update = function(req, res) {

        // create a new variable to hold the track that was placed on the req object.
        var trackId = req.body.id;

        db.Track.findOne({where:{id:trackId}})
        .then(function (data) {
            
            // No data was found
            if (data){
                // Update the attributes of the returned row
                data.updateAttributes({
                    artist : req.body.artist,
                    album : req.body.album,
                    trackTitle : req.body.trackTitle
                })
            }                 
        })
          
    };

    // Delete a track ****************************************************************
    exports.destroy = function(req, res) {
        
        var trackId = req.params.trackId;
        
        db.Track.destroy({where: {id: trackId}}).then(function(){
            return res.json(track);
        }).catch(function(err){
            return res.render('error', {
                error: err,
                status: 500
            });
        });
    };

    // Show a single track ***********************************************************
    exports.show = function(req, res) {

        var trackId = req.params.trackId;

        db.Track.findOne({where: {id: trackId}})
        .then(function(data){
            console.log(data);
            return res.status(200).json(data);
        })
        .error(function(error) {
            return res.status(500).json(error);
        })  
    };

    // List all tracks ***************************************************************
    exports.all = function(req, res) {        
        db.Track.findAll()
        .then(function(data){
            // console.log(data);
            return res.status(200).json(data);
        })
        .error(function(error) {
            return res.status(500).json(error);
        })    
    };

    return exports;

};