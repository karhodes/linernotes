'use strict';

/**
* Module dependencies.
*/

tracks = require('../../api/controllers/tracks');

module.exports = function(app) {
// Tracks Routes
app.route('/tracks')
    .get(tracks.all)
    .post(tracks.create);
app.route('/tracks/:tracksId')
    .get(tracks.show)
    .put(tracks.update)
    .delete(trackss.destroy);

// Finish with setting up the trackId param
// Note: the tracks.tracks function will be called everytime then it will call the next function.
app.param('trackId', tracks.track);
};