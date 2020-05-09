const express = require('express');
const Router = express.Router();

// @route    POST api/users
// @desc     Register a user
// @access   Private

Router.post('/', (req, res) => {
  res.send('Register a contact');
});

// @route    GET api/users
// @desc     Get all contacts
// @access   Private

Router.get('/', (req, res) => {
  res.send('Access all contacts');
});

// @route    PUT api/users/:id
// @desc     Update a contact
// @access   Private

Router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route    DELETE api/users
// @desc     Delete a contact
// @access   Private

Router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = Router;
