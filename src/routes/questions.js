/**
   heyteam/app/routes/questions.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Express Router for questions route
   NOTES:
   CHANGE-LOG:
   v0.0.1: Initial commit
   ----------------------------------------------------
 */

const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions');

router.get('/', questionsController.getAllQuestions, (req, res, next) => {
  res.status(200).json({ message: 'get all questions' });
});

router.post('/', questionsController.addNewQuestions, (req, res, next) => {
  res
    .status(201)
    .json({ message: 'add new questions' })
});

module.exports = router;
