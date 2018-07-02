/**
   heyteam/controllers/users.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Controller logic for Users
   NOTES:
   CHANGE-LOG:
   v0.0.1: initial commit
   ----------------------------------------------------
 */

const mongoose = require('mongoose');
const bunyan = require('bunyan');
const User = require('../models/users.js');
const log = bunyan.createLogger({name: 'users-controller'});

exports.getAllUsers = (req, res, next) => {
  log.info('entered getAllUsers');
  next();
};

exports.addNewUser = (req, res, next) => {
  log.info('entered addNewUser');
  res.locals.newUser = req.params.newUser;
  log.info(`new user: ${res.locals.newUser}`);
  next();
};
