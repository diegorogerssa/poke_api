const validateLoginMiddleware = ( req, res, next) => {
  const { email, password } = req.body;

  if(!email) {
    return res.status(400).json({message: 'email is required'});
  }

  if(!password) {
    return res.status(400).json({message: 'password is required'});
  }
  next();
}
export default validateLoginMiddleware;