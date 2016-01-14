var db = require('../db')
var Sequelize = require('sequelize');

module.exports = db.define('Track', {
  artist:{
    type: Sequelize.STRING
  },
  album:{
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  }
});