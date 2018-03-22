'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('../config/config.js')[env];
var db        = {};
const Todo = require("./todo");

const sequelize = new Sequelize("db", null, null, config);

sequelize
  .sync()
  .then(
    () => console.log('DB connection successful'),
    err => console.log(err)
  )

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Todo = Todo;

module.exports = db;
