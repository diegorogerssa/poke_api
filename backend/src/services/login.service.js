import { findEmail } from "../models/index.js";
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import { chechPass, jwtSign } from "../utils/encrypt_descrypt.js";


const loginService = async (email, password) => {
const findEmailResult = await findEmail(email);
const passData = findEmailResult[0].password

  if(!findEmailResult[0]){
    throw{message:'email is not found'};
  }

  // const checkPassword = await bcrypt.compare(password, findEmailResult[0].password);
  const checkPassword = await chechPass(password, passData)

  if(!checkPassword) {
    throw{message: 'password is incorrect'};
  }


    
  //   const secret = process.env.SECRET;
  //   const token = jwt.sign({
  //     id: findEmailResult[0].id,
  //   },
  //   secret
  // )
  const token = jwtSign(passData)

  return token;

  

  } 

export default loginService;