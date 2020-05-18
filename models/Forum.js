const mongoose = require('mongoose');
const ForumSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name:{
    type:String,
  },
  topic: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  commentstotal: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
ForumSchema.index({'$**': 'text'});

module.exports = mongoose.model('Forum', ForumSchema);