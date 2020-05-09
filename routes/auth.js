const express = require('express');
const Router = express.Router();

// @route    GET api/users
// @desc     Get a user
// @access   Private

Router.post('/', (req, res) => {
  res.send('Get a user');
});

// @route    POST api/users
// @desc     Auth user & get token
// @access   Private

Router.get('/', (req, res) => {
  res.send('Token');
});

module.exports = Router;
