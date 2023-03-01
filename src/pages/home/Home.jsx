import React from 'react';
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import quem from '../../assets/home/quem.png';
import pokemon from '../../assets/home/pokemon.png';
import interrogacao from '../../assets/home/interrogacao.png';
import { StyledImages } from './StyledImages';
import StyledButton from './styledButton';
import { Link } from 'react-router-dom';


const Home = () => {
  return <StyledGerericWrapper
    width="100vw"
    height="100vh"
    flexDirection="column"
    backgroundColor = {({theme}) => theme.light.palette.primary.blue}
    borderRadius = '0'
  >
    <StyledImages src={quem} alt='quem é esse pokemon' 
      width='300px'
    />
    <StyledImages src={pokemon} alt='quem é esse pokemon' 
      width='500px'
    />
    <StyledImages src={interrogacao} alt='quem é esse pokemon' 
      width='60px'
    />
    <StyledGerericWrapper
      width = '500px'
      justifyContent = 'space-around'
      backgroundColor = 'transparent'
    >
      <Link to='/play'>
        <StyledButton>Jogar</StyledButton>
      </Link>
      <Link to='/foundpokemons'>
        <StyledButton>Ver Pokemons</StyledButton>
      </Link>
    </StyledGerericWrapper>
  </StyledGerericWrapper>;
};

export default Home;