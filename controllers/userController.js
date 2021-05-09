exports.post_user = (req, res) => {
  res.status(200).json({message: 'User Created'});
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