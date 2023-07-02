import express from 'express';
import {registerAccount, findName, findEmail} from '../models/index.js';
import bcrypt from 'bcrypt';
import { registerService } from '../services/index.js';
import validateRegisterMiddleare from '../middlewares/validateRegisterMiddleware.js'
import { passHash } from '../utils/encrypt_descrypt.js';


const routesRegister = express.Router();

routesRegister.post('/', validateRegisterMiddleare,  async (req, res) => {
  const { name, email, password } = req.body;
  const pokeballs = 100;  
  const id_generation = 1;
  // const salt = await bcrypt.genSalt(12)
  // const passwordHash = await bcrypt.hash(password, salt)
  const passwordHash = await passHash(password)

  try {
    await registerService(name, email, passwordHash, pokeballs, id_generation)
    
  
    res.status(201).json({message:"usuario criado com sucesso"})
    
  } catch (error) {
    res.status(500).json({message: error.message})
  
    
  }



  // if(!name) {
  //   return res.status(400).json({message: 'name is required'});
  // }

  // const findNameResult = await findName(name);

  // if(findNameResult.length > 0){
  //   return res.status(400).json({message: 'name already exists'});
  // }

  // if(!email) {
  //   return res.status(400).json({message: 'email is required'});
  // }

  // const findEmailResult = await findEmail(email);
  // console.log(findEmailResult);

  // if(findEmailResult.length > 0){
  //   return res.status(400).json({message: 'email already exists'});
  // }

  // if(!password) {
  //   return res.status(400).json({message: 'password is required'});
  // }
  
  // if(!confirmPassword) {
  //   return res.status(400).json({message: 'confirmPassword is required'});
  // }

  // if(password !== confirmPassword) {
  //   return res.status(400).json({message: 'password and confirmPassword must be the same'});
  // }

  // const salt = await bcrypt.genSalt(12)
  // const passwordHash = await bcrypt.hash(password, salt)



  // try {
  //   const id = await registerAccount(name, email, passwordHash,pokeballs, id_generation);
  //   res.status(201).json({message: 'Account created successfully', id});
    
  // } catch (error) {
  //   res.status(500).json({message: error.message});
  // }
  

  
})

export default routesRegister;