/**
   heyteam/app.js
   ====================================================
   CREATED: 2018-07-01
   UPDATED: 2018-07-05
   VERSION: v0.1.0
   AUTHOR: wlharvey4
   ABOUT: Express application file
   NOTES:
   CHANGE-LOG:
   ....................................................
   v0.0.1 2018-07-01: initial commit
   ....................................................
   v0.1.0 2018-07-05: installed express, router, and
   mongodb/mongoose with cors
   ----------------------------------------------------
 */

const express = require('express');
const mongoose= require('mongoose');
const morgan  = require('morgan');
const bunyan  = require('bunyan');
const cors    = require('cors');

const appLogger = bunyan.createLogger({ name: "heyteam-app" });
appLogger.info('Starting appLogger...');

/* EXPRESS */
const app = express();
app.use(
  cors(),
  morgan('dev'),
  express.json(),
  express.urlencoded({ extended: false })
);
app.options('*', cors()); // cors preflight

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'heyteam app home' });
});

/* ROUTER */
const usersRouter     = require('./routes/users');
const questionsRouter = require('./routes/questions');
app.use('/users',     usersRouter);
app.use('/questions', questionsRouter);
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  appLogger.warn('This is the error handling route');
  appLogger.error(err);
  res.status(err.status || 500);
  res.json({
    error: { message: err.message }
  });
});

/* MONGODB */
const user   = process.env.MONGODB_USER;
const pw     = process.env.MONGODB_PW;
const host   = process.env.MONGODB_HOST;
const dbName = process.env.MONGODB_DBNAME;
const uri    = `mongodb+srv://${user}:${pw}@${host}.mongodb.net/test?retryWrites=true`;
const options= { dbName };

mongoose.connect(uri, options)
 	.then(
 	  () => appLogger.info('connected to MongoDB Atlas cluster'),
 	  err => appLogger.error(err)
 	);

module.exports = app;
