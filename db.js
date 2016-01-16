// Sequelize Database for LinerNotes

// Dependencies
var dotenv 	= require('dotenv').load();
var mysql 	= require('mysql');
var Sequelize = require('sequelize');

// Configuration
var sequelize = new Sequelize(process.env.DB_NAME, process.env.MYSQL_NAME, process.env.MYSQL_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
	port: process.env.DB_PORT,
	pool: {max: 5, min: 0, idle: 10000}
});

var test = sequelize.authenticate().then(function(){
      console.log("connected");
    }).catch(function(err){
      console.log("something goofed", err);
    })
    .done();



sequelize.sync();
module.exports = sequelize;