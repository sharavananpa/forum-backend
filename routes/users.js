const express = require('express');
const Router = express.Router();

// @route    POST api/users
// @desc     Register a user
// @access   Public

Router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = Router;
