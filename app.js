/**
   hey/app.js
   ====================================================
   CREATED: 2018-07-01
   UPDATED: 2018-07-01
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Express application file
   NOTES:
   CHANGE-LOG:
   v0.0.1: initial commit
   ----------------------------------------------------
 */

const express = require('express');
const mongoose= require('mongoose');
const morgan  = require('morgan');
const bunyan  = require('bunyan');

const usersRouter     = require('./routes/users');
const questionsRouter = require('./routes/questions');

const appLogger = bunyan.createLogger({ name: "hey-app" });
appLogger.info('Starting appLogger...');

const app = express();
app.use(
  morgan('dev'),
  express.json(),
  express.urlencoded({ extended: false })
);

const user   = process.env.MONGODB_USER;
const pw     = process.env.MONGODB_PW;
const host   = process.env.MONGODB_HOST;
const dbName = process.env.MONGODB_DB;
const uri    = `mongodb+srv://${user}:${pw}@${host}.mongodb.net/test?retryWrites=true`;
const options= { dbName };

mongoose.connect(uri, options)
 	.then(
 	  () => appLogger.info('connected to MongoDB Atlas cluster'),
 	  err => appLogger.error(err)
 	);

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'heyteam app home' });
});

app.use('/users',     usersRouter);
app.use('/questions', questionsRouter);

module.exports = app;
