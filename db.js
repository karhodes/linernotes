// Sequelize Database for LinerNotes
'use strict';

// Dependencies
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var _ = require('lodash');
var dotenv 	= require('dotenv').load();
var mysql 	= require('mysql');
var db = {};

var config = {
	modelsDir: './api/models'
}

console.log("Initializing sequelize...")

// Configuration
var sequelize = new Sequelize(process.env.DB_NAME, process.env.MYSQL_NAME, process.env.MYSQL_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
	port: process.env.DB_PORT,
	pool: {max: 5, min: 0, idle: 10000}
});

var test = sequelize.authenticate().then(function(){
      console.log("Sequelize connected");
    }).catch(function(err){
      console.log("Error with sequelize connection", err);
    })
    .done();

// loop through all files in models directory ignoring hidden files and this file

fs.readdirSync(config.modelsDir)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    // import model files and save model names
    .forEach(function (file) {
        console.log('Loading model file ' + file);
        var model = sequelize.import(path.join(config.modelsDir, file));
        db[model.name] = model;
    });


// invoke associations on each of the models
/*
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
        db[modelName].options.associate(db)
    }
});
*/


// Synchronizing any model changes with database. 
// set FORCE_DB_SYNC=true in the environment, or the program parameters to drop the database,
//   and force model changes into it, if required;
// Caution: Do not set FORCE_DB_SYNC to true for every run to avoid losing data with restarts
sequelize
    .sync({
        force: config.FORCE_DB_SYNC === 'true',
        logging: config.enableSequelizeLog === 'true'
    })
    .then(function () {
        console.log("Database " + (config.FORCE_DB_SYNC === 'true' ? "*DROPPED* and " : "") + "synchronized");
    }).catch(function (err) {
        console.log("An error occurred: ", err);
    });

// assign the sequelize variables to the db object and returning the db. 
module.exports = _.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);