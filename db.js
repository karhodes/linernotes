// Sequelize Database for LinerNotes
// var dotenv 	= require('dotenv').load();
// var mysql 	= require('mysql');

// Mongo DB connection via mongoose:
// Remove after sequelizer set up
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/songlist')
module.exports = mongoose

// Todo:  Remove mongo & udpate with sequelize
// var mongojs		= require('mongojs');
// var db = mongojs('songlist', ['songlist']);	
