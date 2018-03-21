require("./server/models");
require("./migrate");

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

require("./server.js")(app);
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome.'
}));


module.exports = app;