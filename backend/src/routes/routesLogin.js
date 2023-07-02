import express from 'express';
import { findEmail } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import { loginService } from '../services/index.js';
import validateLoginMiddleware from '../middlewares/validateLoginMiddleware.js';



const routesLogin = express.Router();

routesLogin.post('/', validateLoginMiddleware, async (req, res) => {
  const { email, password } = req.body;


  // if(!email) {
  //   return res.status(400).json({message: 'email is required'});
  // }

  // const findEmailResult = await findEmail(email);

  // if(!findEmailResult[0]){
  //   return res.status(404).json({message:'email is not found'});
  // }

  // if(!password) {
  //   return res.status(400).json({message: 'password is required'});
  // }
  
  // const checkPassword = await bcrypt.compare(password, findEmailResult[0].password);

  // if(!checkPassword) {
  //   return res.status(400).json({message: 'password is incorrect'});
  // }

  try {
    
    const token = await loginService(email, password)

    res.status(200).json({message: 'login sucessfull', token});

  

  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Aconteceu um erro no servidor, tente novamente mais tarde!'});
  
    
  }
})

export default routesLogin;