const User = require('../models/userModel');

const handleError = (err) => {
  // console.log(err.message, err.code);
  let errors = {
    name: '',
    email: '',
    country: ''
  }

  if(err.code === 11000){
    errors.email = 'User with this email already exist'
  }

  if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach( ({properties}) => {
      errors[properties.path] = properties.message;
    });
  }
  

  return errors;
}

exports.post_user = async (req, res) => {

  const {name, email, country} = req.body;
  const inputs = {
    name,
    email,
    country 
  }

  try{
    const user = await User.create(inputs);
    if(user){
      res.status(201).json({user});
    }
  }catch(error){
    let errors = handleError(error);
    res.status(400).json({errors});
  }
  
}

exports.get_user = (req, res) => {
  res.status(200).json({message: 'User'});
}

exports.update_user = (req, res) => {
  res.status(200).json({message: 'User Updated'});
}

exports.delete_user = (req, res) => {
  res.status(200).json({message: 'User Deleted'});
}