import express from 'express';
import { loginService } from '../services/index.js';
import validateLoginMiddleware from '../middlewares/validateLoginMiddleware.js';

const routesLogin = express.Router();

routesLogin.post('/', validateLoginMiddleware, async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await loginService(email, password)

    res.status(200).json({message: 'login sucessfull', token});

  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Aconteceu um erro no servidor, tente novamente mais tarde!'});
  }
})

export default routesLogin;