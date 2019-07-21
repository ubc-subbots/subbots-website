const express = require('express');
const router = express.Router();
const path = require('path');

const rateLimit = require("express-rate-limit");  //Used to limit rest requests
const joinLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 50, // limit each IP to 50 requests per windowMs
  message: "Too many join requests. If this is a human try again in an hour"
});

const JoinController = require(__dirname + '/rest/join/JoinController.js');
const JoinValidator = require(__dirname + '/rest/join/JoinValidator.js');

//Rest API
router.post('/rest/join', joinLimiter, JoinValidator, JoinController);

//Otherwise serve frontend
//Nessesary for react-app build (see https://facebook.github.io/create-react-app/docs/deployment)
router.use(express.static(path.join(__dirname, '../../frontend/build')))
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

module.exports = router;