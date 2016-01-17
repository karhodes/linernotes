// LinerNotes Application:  Track Model
'use strict';


module.exports = function(sequelize, DataTypes) {

  var Track = sequelize.define('Track', {
      artist: DataTypes.STRING,
      album: DataTypes.STRING,
      trackTitle: DataTypes.STRING
    }
  );

  return Track;
};


// Note:  For adding associations, see here:
// https://github.com/jpotts18/mean-stack-relational/blob/master/app/models/article.js