/**
   heyteam/controllers/questions.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Controller logic for Questions
   NOTES:
   CHANGE-LOG:
   v0.0.1: Initial commit
   ----------------------------------------------------
 */

const mongoose = require('mongoose');
const bunyan = require('bunyan');
const Questions = require('../models/questions.js');
const log = bunyan.createLogger({ name: 'questions-controller' });

exports.getAllQuestions = (req, res, next) => {
  log.info('entereed getAllQuestions');
  next();
};

exports.addNewQuestions = (req, res, next) => {
  log.info('entered addNewQuestions');
  next();
};
