import { loginService } from "../services/index.js";

const loginController = async (req, res, next) => {

  const { email, password } = req.body;

  try {
    const token = await loginService(email, password)

    res.status(200).json({message: 'login sucessfull', token});


  } catch (err) {
      next(err)
  } 
}

export default loginController;