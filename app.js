/**
   hey/app.js
   ====================================================
   CREATED: 2018-07-01
   MODIFIED: 2018-07-01
   VERSION: 0.0.1
   AUTHOR: wlharvey4
   ABOUT: Express application file
   NOTES:
   CHANGE-LOG:
   0.0.1: initial commit
   ----------------------------------------------------
 */

const express = require('express');
const morgan = require('morgan');
const bunyan = require('bunyan');

const appLogger = bunyan.createLogger({name: "hey-app"});
appLogger.info('Starting...');

const app = express();
app.use(morgan('dev'), express.json(), express.urlencoded({extended: false}));

module.exports = app;
