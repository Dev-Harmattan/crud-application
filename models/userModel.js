const mongoose = require('mongoose');

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
    unique: [true, 'User with this password already exist']
  },
  country: {
    type: String,
    required: [true, 'Please enter your country name'],
    lowercase: true,
    trim: true
  }
});

const User = mongoose.Model('user', userSchema);
module.exports = User;