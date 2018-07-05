/**
   heyteam/controllers/users.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-05
   VERSION: v0.1.0
   AUTHOR: wlharvey4
   ABOUT: Controller logic for Users
   NOTES:
   CHANGE-LOG:
   ....................................................
   v0.0.1 2018-07-02:
   initial commit
   ....................................................
   v0.1.0 2018-07-05T09:21:00:
   add newUser; get all users
   ----------------------------------------------------
 */

const mongoose = require('mongoose');
const bunyan = require('bunyan');
const User = require('../models/users.js');
const log = bunyan.createLogger({name: 'users-controller'});

exports.getAllUsers = (req, res, next) => {
  log.info('entered getAllUsers');
  User.find()
      .exec((err, users) => {
	if (err) {
	  log.error('error encountered while getting all Users:' + err);
	} else {
	  log.info(users);
	}
      })
  next();
};

exports.addNewUser = (req, res, next) => {
  log.info('entered addNewUser');
  res.locals.newUser = req.params.newUser;
  log.info(`added new user to res.locals.newUser: ${res.locals.newUser}`);
  const newUser = new User({ name: res.locals.newUser });
  newUser
    .save((err, newUser) => {
      if (err) {
	log.error(`something went wrong while saving new user ${req.params.newUser}: ` + err)
      } else {
	log.info(`saved new user ${newUser.name}`)
      }
    });
  next();
};
