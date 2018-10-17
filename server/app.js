// server/app.js
const express = require('express');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

require('dotenv').config();

// !! Uncomment the following lines to enable authentication
// const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');

const app = express();

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  return next();
});

app.use(cookieParser());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// !! Uncomment the following lines to enable authentication
// app.use(authRouter.authenticationMiddleware('/auth'));
// app.use('/auth', authRouter.router);
app.use('/api', apiRouter.router);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;