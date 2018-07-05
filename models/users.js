/**
   heyteam/app/models/users.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.1.0
   AUTHOR: wlharvey4
   ABOUT: User Mongoose model
   NOTES:
   CHANGE-LOG:
   v0.0.1 2018-07-02:
   initial commit
   ....................................................
   v0.1.0 2018-07-05T09:25:00
   remove _id from schema
   ----------------------------------------------------
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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

module.exports = mongoose.model('User', userSchema);
