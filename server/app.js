const express = require('express');

const app = express();

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/.env') });

const bodyParser = require('body-parser');

const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'DELETE, PATCH, PUT, POST, GET, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  );
  next();
});

app.use('/tasks', require('./routes/tasks')());

// SERVE ANGULAR APP
app.use(express.static(`${__dirname}/www`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/www/index.html`);
});

module.exports = app;
