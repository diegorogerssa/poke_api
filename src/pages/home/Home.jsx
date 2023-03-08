import React, { useContext } from 'react';
import whatPokemon from '../../assets/home/quem-e-esse-pokemon.png';

import { Link } from 'react-router-dom';
import { StyledButton, StyledImages, StyledWrapper } from './StyledHome';
import DataContext from '../../contexts/DataContext';

const Home = () => {

  const { handlePlayReload } = useContext(DataContext);
  return <StyledWrapper>
    <StyledImages src={whatPokemon} alt='quem é esse pokemon'/>

    <div
    >
      <StyledButton onClick={ handlePlayReload }>Jogar</StyledButton>
      <Link to='/foundpokemons'>
        <StyledButton>Ver Pokemons</StyledButton>
      </Link>
    </div>
  </StyledWrapper>;
};

export default Home;