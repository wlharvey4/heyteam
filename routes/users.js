/**
   heyteam/app/routes/users.js
   ====================================================
   CREATED: 2018-07-02
   UPDATED: 2018-07-02
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Router users route
   NOTES:
   CHANGE-LOG:
   v0.0.1: initial commit
   ----------------------------------------------------
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'heyteam users home'});
});

module.exports = router;
