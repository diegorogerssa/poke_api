import React, { useEffect } from 'react';
import DataContext from './DataContext';
import PropTypes from 'prop-types';
import { getPokemons } from '../utils/data';
import { getPokemon } from '../services/api/api';
import { useNavigate } from 'react-router-dom';



const DataProvider = ({ children }) => {
  const [objectData, setObjectData] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [winner, setWinner] = React.useState(false);
  const [idRandom, setIdRandom] = React.useState();
  
  const [loser, setLoser] = React.useState(false);

  const navigate = useNavigate(); 


  useEffect(() => {
    async function fetchData() {
      const ress = await getPokemons();
      setObjectData(ress); 
    }
    fetchData();
  }, []);
  
  React.useEffect(() => {
    const getPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
    let random = Math.floor(Math.random() * 150) + 1;
    // let random = 25;
    if (getPokemons) {
      while (getPokemons.includes(random)) {
        random = Math.floor(Math.random() * 150) + 1;
      }
    }
    async function getPokemonData() {
      setIdRandom(random);
      // console.log(random);
      const pokemonData = await getPokemon(random);
      setPokemon(pokemonData);
    }
    getPokemonData();
  }, []);
  
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