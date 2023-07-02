import {registerAccount, findName, findEmail} from '../models/index.js'


const registerService = async (name, email, password, pokeballs, id_generation) => {


  const findNameResult = await findName(name);

  if(findNameResult.length > 0){
    throw new Error('name already exists');
  }

  const findEmailResult = await findEmail(email);
  

  if(findEmailResult.length > 0){
    throw new Error('email already exists');
  }


    await registerAccount(name, email, password,pokeballs, id_generation);
    

}

export default registerService
