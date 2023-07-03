import express from 'express';
import { insertPokemon } from '../models/index.js'

const routesPokemon = express.Router();

routesPokemon.post('/', async (req, res) => {
  const { id_pokemon, name_pokemon, image } = req.body;
  
  try {
    const result = await insertPokemon(id_pokemon, name_pokemon, image)
  
    res.status(201).json({ message: `Pokemon cadastrado com sucesso com o id ${result}`});
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default routesPokemon;