/**
 * Migration runner, which loads process.env vars via dotenv before running the migrations
 */
require('dotenv').config({path: 'process.env'});
var DBMigrate = require('db-migrate');

var migrateInstance = DBMigrate.getInstance();
migrateInstance.run();