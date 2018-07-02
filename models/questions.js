/**
   heyteam/app/models/questions.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Mongoose model Question
   NOTES:
   CHANGE-LOG:
   v0.0.1: initial commit
   ----------------------------------------------------
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = require('./users.js');

const questionsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  topic: {
    type: String,
    required: true
  },
  questions: [
    {
      no: {
	type: Number,
	required: true,
      },
      question: {
	type: String,
	required: true,
      },
      answers: [
	{
	  by: {
	    type: Schema.Types.ObjectId,
	    ref: 'User'
	  },
	  answer: {
	    type: String,
	    required: true,
	  },
	  date: {
	    type: Date,
	    default: Date.now,
	  },
	},
      ],
    },
  ],
  creationDate: {
    type: Date,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },
  accessedBy: [
    {
      name: {
	type: Schema.Types.ObjectId,
	ref: 'User',
	required: true
      },
      date: {
	type: Date,
	default: Date.now
      },
    },
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [
    {
      by: {
	type: Schema.Types.ObjectId,
	ref: 'User',
      },
      comment: String,
      date: {type: Date, default: Date.now}
    },
  ],
});

module.exports = mongoose.model('Question', questionsSchema);
