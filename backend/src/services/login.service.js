import { findEmail } from "../models/index.js";
import { chechPass, jwtSign } from "../utils/encrypt_descrypt.js";


const loginService = async (email, password) => {


  const findEmailResult = await findEmail(email);
  
  if(findEmailResult.length === 0) {
    throw {message:'email not found', statusCode:404};
  }
  
  const passData = findEmailResult[0].password
  const checkPassword = await chechPass(password, passData)

  if(!checkPassword) {
    throw{message: 'password is incorrect', statusCode: 401};
  }

  const token = jwtSign(passData)

  return token;
  } 

export default loginService;