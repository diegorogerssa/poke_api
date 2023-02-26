import React, { useEffect } from 'react';
import DataContext from './DataContext';
import PropTypes from 'prop-types';
import { getPokemons } from '../utils/data';



const DataProvider = ({ children }) => {
  const [objectData, setObjectData] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [winner, setWinner] = React.useState(false);
  
  const [loser, setLoser] = React.useState(false);


  useEffect(() => {
    async function fetchData() {
      const ress = await getPokemons();
      setObjectData(ress); 
    }
    fetchData();
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