//requisição para a api do poke api
export const getPokeApi = async () => {
  const urlApi = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1';
  const response = await fetch(urlApi);
  const data = await response.json();
  const promisse = Promise.all(data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    return data;
  }
  )); 
  return promisse;
};


export const getSpecies = async (id) => {
  const urlApi = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

export const getPokemon = async (id) => {
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};
