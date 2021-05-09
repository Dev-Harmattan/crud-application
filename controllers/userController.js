const User = require('../models/userModel');

const handleError = (err) => {
  // console.log(err.message, err.code);
  let errors = {
    name: '',
    email: '',
    country: ''
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
      res.status(201).json({message: 'User created Succesfully', user});
    }
  }catch(error){
    let errors = handleError(error);
    res.status(400).json({errors});
  }
  
}

exports.get_user = (req, res) => {

  User.findById({_id: req.params.id}, (err, user) => {
    if(err) {
      return res.status(400).json({mssage: err});
    }else if(!user){
      return res.status(400).json({message: 'User not found'});
    }else{
      return res.status(201).json({message: user});
    }
  })
  
}

exports.update_user = (req, res) => {

  const {name, email, country} = req.body;
  User.findByIdAndUpdate({_id: req.params.id}, {name, email, country}, (err, user) => {
    if(err) {
      return res.status(400).json({message: err});
    }else if(!user){
      return res.status(400).json({message: 'User not found'});
    }else{
      user.save((err, user) => {
        if(user){
          return res.status(201).json({messag: user});
        }else{
          return res.status(400).json({message: err});
        }
      })
      
    }
  })

}

exports.delete_user = (req, res) => {
  User.findByIdAndDelete({_id: req.params.id}, (err, user) => {
    if(err){
       res.status(400).json({message: err});
    }else if(!user){
      res.status(400).json({message: 'User not found'});
    }else{
       res.status(200).json({message: 'User deleted Successfully', user});
    }
  })
 
}