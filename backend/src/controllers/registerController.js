import { registerService } from "../services/index.js";
import { passHash } from '../utils/encrypt_descrypt.js';

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  const pokeballs = 100;  
  const id_generation = 1;
  const passwordHash = await passHash(password)

  try {
    await registerService(name, email, passwordHash, pokeballs, id_generation)

    res.status(201).json({message:"usuario criado com sucesso"})
    
  } catch (err) {
      next(err)
  }
}

export default registerController;