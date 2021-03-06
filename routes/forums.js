const express = require('express');
const Router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth.js');
const Forum = require('../models/Forum');
// @route    POST api/users
// @desc     Register a user
// @access   Private

Router.post(
  '/',
  auth,
  async (req, res) => {
    

    const { name, topic, body, likes, commentstotal, comments } = req.body;

  try {
    const newForum = new Forum({
      name: req.user.name,
      topic,
      body,
      likes,
      commentstotal,
      comments,
      user: req.user.id,
    });

      const forum = await newForum.save();

      return res.json(forum);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/users
// @desc     Get all contacts
// @access   Private

Router.get('/', auth, async (req, res) => {
  try {
    const {text} = req.body;
    const forums = await Forum.find({$text: {$search: text}}).sort({
      date: -1,
    });
    return res.json(forums);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});
// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
Router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
Router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = Router;
