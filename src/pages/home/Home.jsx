import React from 'react';
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import whatPokemon from '../../assets/home/quem-e-esse-pokemon.png';

import { Link } from 'react-router-dom';
import { StyledButton, StyledImages, StyledWrapper } from './StyledHome';



const Home = () => {
  return <StyledWrapper>
    <StyledGerericWrapper
      backgroundColor = 'transparent'
      width = '100%'
      height = '100%'
      flexDirection = 'column'
      justifyContent = 'flex-end'
      // padding = '100px 0 0 0'
    >
      <StyledImages src={whatPokemon} alt='quem é esse pokemon'/>

    </StyledGerericWrapper>
    <StyledGerericWrapper
      // width = '500px'
      flexDirection = 'column'
      justifyContent = 'flex-start'
      backgroundColor = 'transparent'
      padding = '50px 0 0 0'
    >
      <Link to='/play'>
        <StyledButton>Jogar</StyledButton>
      </Link>
      <Link to='/foundpokemons'>
        <StyledButton>Ver Pokemons</StyledButton>
      </Link>
    </StyledGerericWrapper>
  </StyledWrapper>;
};

export default Home;