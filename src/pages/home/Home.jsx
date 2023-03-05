import React from 'react';
import whatPokemon from '../../assets/home/quem-e-esse-pokemon.png';

import { Link } from 'react-router-dom';
import { StyledButton, StyledImages, StyledWrapper } from './StyledHome';



const Home = () => {
  return <StyledWrapper>
   
    <StyledImages src={whatPokemon} alt='quem é esse pokemon'/>

    <div
    >
      <Link to='/play'>
        <StyledButton>Jogar</StyledButton>
      </Link>
      <Link to='/foundpokemons'>
        <StyledButton>Ver Pokemons</StyledButton>
      </Link>
    </div>
  </StyledWrapper>;
};

export default Home;