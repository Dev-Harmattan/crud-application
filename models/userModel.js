const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Please enter your name'],
    lowercase: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    lowercase: true,
    trim: true,
    unique: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  country: {
    type: String,
    required: [true, 'Please enter your country name'],
    lowercase: true,
    trim: true
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;