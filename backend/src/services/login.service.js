import { findEmail } from "../models/index.js";
import { chechPass, jwtSign } from "../utils/encrypt_descrypt.js";


const loginService = async (email, password) => {
const findEmailResult = await findEmail(email);
const passData = findEmailResult[0].password

  if(!findEmailResult[0]){
    throw{message:'email is not found'};
  }

  const checkPassword = await chechPass(password, passData)

  if(!checkPassword) {
    throw{message: 'password is incorrect'};
  }

  const token = jwtSign(passData)

  return token;
  } 

export default loginService;