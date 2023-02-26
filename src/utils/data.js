import { getPokeApi, getSpecies } from '../services/api/api';


export const getPokemons = async () => {
  const pokemons = await getPokeApi();
  const pokemonsData = pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      ability: pokemon?.abilities[0]?.ability?.name,
      ability2: pokemon?.abilities[1]?.ability?.name,
      type: pokemon.types[0].type.name,
      image: pokemon.sprites.other.dream_world.front_default,
    };
  });
  return pokemonsData;
};

export const getPokemon = async (id) => {
  const pokemon = await getSpecies(id);
  const pokemonData = {
    color: pokemon.color.name,
    flavorText: pokemon.flavor_text_entries[0].flavor_text,
    habitat: pokemon.habitat.name,
    shape: pokemon.shape.name,
  };
  return pokemonData;
};