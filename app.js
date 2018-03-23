const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

require("./src/models");
require("./src/migrate");

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

require("./server.js")(app);
require('./src/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome.'
}));


module.exports = app;