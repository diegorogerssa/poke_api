import axios from "axios";

async function buscaDadosPokeApi(id) {
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await axios.get(urlApi);
  return response.data
}

export default buscaDadosPokeApi;