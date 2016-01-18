'use strict';

/**
* Module dependencies.
*/

module.exports = function (express) {

	var router = express.Router();
	var tracks = require('../../api/controllers/tracks');


// Tracks Routes
router.route('/tracks')
    .get(tracks.all)
    .post(tracks.create);
router.route('/tracks/:tracksId')
    .get(tracks.show)
    .put(tracks.update)
    .delete(tracks.destroy);

// Finish with setting up the trackId param
// Note: the tracks.tracks function will be called everytime then it will call the next function.
router.param('trackId', tracks.track);

return router;
};