import React, { useEffect } from 'react';
import DataContext from './DataContext.js';
import PropTypes from 'prop-types';
import { getPokemons } from '../utils/data.js';
import { getPokemon } from '../services/api/api.js';
import { useNavigate } from 'react-router-dom';
import { generation } from '../utils/generation.js';



const DataProvider = ({ children }) => {
  const [objectData, setObjectData] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [winner, setWinner] = React.useState(false);
  const [idRandom, setIdRandom] = React.useState();
  const [loser, setLoser] = React.useState(false);
  const [selectGen, setSelectGen] = React.useState(() => {
    const generation = JSON.parse(localStorage.getItem('idGen'));
    return generation ?? 1;
  });

  const navigate = useNavigate(); 

  // console.log(selectGen);
  useEffect(() => {
    async function fetchData() {
      const ress = await getPokemons();
      setObjectData(ress); 
    }
    fetchData();
  }, []);
  

  React.useEffect(() => {
    localStorage.setItem('idGen', JSON.stringify(selectGen));
    const getPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
    // let random = Math.floor(Math.random() * 150) + 1;
    // let random  = generation(selectGen);
    // console.log(random);
    // console.log(random);
    let random = 25;
    if (getPokemons) {
      getPokemons.forEach((pokeId) => {
        // console.log(pokeId.id);
        while (pokeId.id === random) {
          random  = generation(selectGen);
        }
      });
    }
    async function getPokemonData() {
      setIdRandom(random);
      const pokemonData = await getPokemon(random);
      setPokemon(pokemonData);
    }
    getPokemonData();
  }, [selectGen]);
  


  const handlePlayReload = () => {
    setLoser(false);
    setWinner(false);
    setPokemon([]);
    navigate('/play');
    window.location.reload();
  };

  const handlePokedexReload = () => {
    setLoser(false);
    setWinner(false);
    setPokemon([]);
    navigate('/foundpokemons');
    window.location.reload();
  };

  const handleHomeReload = () => {
    setLoser(false);
    setWinner(false);
    setPokemon([]);
    navigate('/');
    
  };

  const data = {
    objectData,
    setObjectData,
    pokemon,
    setPokemon,
    winner,
    setWinner,
    loser,
    setLoser,
    idRandom,
    handlePlayReload,
    handlePokedexReload,
    handleHomeReload,
    selectGen,
    setSelectGen,
  };

  return (
    <DataContext.Provider value={ data }>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;