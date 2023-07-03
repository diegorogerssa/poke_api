import {registerAccount, findName, findEmail} from '../models/index.js'

const registerService = async (name, email, password, pokeballs, id_generation) => {

  const findNameResult = await findName(name);

  if(findNameResult.length > 0){
    throw {message:'name already exists', statusCode:400};
  }

  const findEmailResult = await findEmail(email);
  
  if(findEmailResult.length > 0){
    throw {message:'email already exists', statusCode:400};
  }

    await registerAccount(name, email, password,pokeballs, id_generation);
}

export default registerService
