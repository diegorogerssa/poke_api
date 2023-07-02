import React, { useContext } from 'react';
import poke from '../../assets/pokebola-wins.png';
import DataContext from '../../contexts/DataContext';
import StyledItWinner from './StyledItWinner';
import { useNavigate } from 'react-router-dom';
import StyledWrapper from '../../components/layouts/StyledWrapper';
import StyledButton from '../../components/inputs/StyledButton';
import StyledImage from '../../components/dataDisplay/StyledImage';
import StyledParagraph from '../../components/typography/StyledParagraph';

const ItWinner = () => {
  const { pokemon, handlePlayReload} = useContext(DataContext);

  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/foundpokemons');
  };
      
  return (
    <StyledWrapper>
      <StyledItWinner>
        <StyledImage 
          src={poke} 
          alt="icon-poke" />
        <StyledParagraph size='0.9rem'>Pokemon Encontrado</StyledParagraph>
        <StyledImage 
          src={pokemon?.sprites?.other['official-artwork']?.front_default} 
          alt={pokemon.name} 
        />
        <StyledParagraph size='1.1rem'>{pokemon.name}</StyledParagraph>
        <StyledButton
          onClick={handlePlayReload}
        >
          Jogar Novamente</StyledButton>
        <StyledButton
          onClick={handleNavigate}
        >
          Ver Pokedex</StyledButton>
      </StyledItWinner>
    </StyledWrapper>
  );
};

export default ItWinner;