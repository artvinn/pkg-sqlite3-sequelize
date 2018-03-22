'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('../config/config.js')[env];
var db        = {};
const Todo = require("./todo");

const onConnected = (sequelize) => {
  sequelize.sync().then(function(){
    console.log('DB connection sucessful.');
  }, function(err){
    // catch error here
    console.log(err);
  });
}

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  onConnected(sequelize);
} else {
  sequelize = new Sequelize("db", null, null, config);
  onConnected(sequelize);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Todo = Todo;

module.exports = db;
