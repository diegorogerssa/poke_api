const validateRegisterMiddleware = (req, res, next) => {
  const { name, email, password, confirmPassword  } = req.body;

  if(!name) {
    return res.status(400).json({message: 'name is required'});
  }

  if(!email) {
    return res.status(400).json({message: 'email is required'});
  }

  if(!password) {
    return res.status(400).json({message: 'password is required'});
  }
  
  if(!confirmPassword) {
    return res.status(400).json({message: 'confirmPassword is required'});
  }

  if(password !== confirmPassword) {
    return res.status(400).json({message: 'password and confirmPassword must be the same'});
  }
  next()
}
export default validateRegisterMiddleware;