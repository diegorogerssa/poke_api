import connection from '../data/connection.js';

const insertPokemon = async (id_pokemon, name_pokemon, image) => {
  const [result] = await connection.execute(
    'INSERT INTO pokemon (id_pokemon, name_pokemon, image) VALUES (?, ?, ?)',[id_pokemon, name_pokemon, image]
  )
  return result.insertId;
  
}

export default insertPokemon;