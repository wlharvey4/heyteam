/**
   heyteam/app/models/users.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: User Mongoose model
   NOTES:
   CHANGE-LOG:
   v0.0.1: initial commit
   ----------------------------------------------------
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: Schema.types.ObjectID,
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    default: "all",
  },
  authLevel: {
    type: Number,
    default: 0,
  },
  joined: {
    type: Date,
    default: Date.now
  },
  left: {
    type: Date
  }
});

module.exports = model('User', userSchema);
