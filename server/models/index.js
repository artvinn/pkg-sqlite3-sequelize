const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require('../config/config.js')[env];

// need to explicitly require models as pkg doesn't support dynamic require
require("./todo");
require("./todoitem");

const sequelize = new Sequelize("db", null, null, config);
const db = { sequelize };

// connect to db
sequelize
  .sync()
  .then(
    () => console.log('DB connection successful'),
    err => console.log(err)
  )

// load models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// associate models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
