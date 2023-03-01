import React, { useEffect } from 'react';
import DataContext from './DataContext';
import PropTypes from 'prop-types';
import { getPokemons } from '../utils/data';
import { getPokemon } from '../services/api/api';



const DataProvider = ({ children }) => {
  const [objectData, setObjectData] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [winner, setWinner] = React.useState(false);
  const [idRandom, setIdRandom] = React.useState();
  
  const [loser, setLoser] = React.useState(false);


  useEffect(() => {
    async function fetchData() {
      const ress = await getPokemons();
      setObjectData(ress); 
    }
    fetchData();
  }, []);
  
  React.useEffect(() => {
    async function getPokemonData() {
      const random = Math.floor(Math.random() * 1008) + 1;
      // const random = 25;

      setIdRandom(random);
      // console.log(random);
      const pokemonData = await getPokemon(random);
      setPokemon(pokemonData);
    }
    getPokemonData();
  }, []);
  

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