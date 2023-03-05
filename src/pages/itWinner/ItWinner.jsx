import React, { useContext } from 'react';
import poke from '../../assets/pokebola-wins.png';
import DataContext from '../../contexts/DataContext';
import StyledItWinner from './StyledItWinner';
import { useNavigate } from 'react-router-dom';

const ItWinner = () => {
  const { pokemon, handlePlayReload} = useContext(DataContext);

  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/foundpokemons');
  };
      
  return (
    <StyledItWinner>
      <div>
        <img 
          width='20px'
          src={poke} 
          alt="icon-poke" />
        <p>Pokemon Encontrado</p>
        <img 
          src={pokemon?.sprites?.other['official-artwork']?.front_default} 
          alt={pokemon.name} 
          width='200px'
        />
        <p>{pokemon.name}</p>
        <button
          onClick={handlePlayReload}
        >
          Jogar Novamente</button>
        <button
          onClick={handleNavigate}
        >
          Ver Pokedex</button>
      </div>
    </StyledItWinner>
  );
};

export default ItWinner;