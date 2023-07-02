
import React, { useContext } from 'react';
import { StyledPlay } from './StyledPlay';
import GameCard from '../../patterns/gameCard/GameCard';
import ImagePlay from '../../patterns/ImagePlay/ImagePlay';
import Loading from '../../components/loading/Loading';
import DataContext from '../../contexts/DataContext';
import StyledButton from '../../components/inputs/StyledButton';
import { useNavigate } from 'react-router-dom';
import StyledHeading from '../../components/typography/StyledHeading';

const Play = () => {
  const navigate = useNavigate();

  const { pokemon, selectGen } = useContext(DataContext);
  if (pokemon.length === 0 && selectGen ){
    return <Loading />;
  }

  const handleNavigate = () => {
    navigate('/geracao');
  };
  return (
    <>
      <StyledButton
        width='300px'
        height='5vh'
        onClick={handleNavigate}
      >
        Escolher Geração
      </StyledButton>
      <StyledHeading
        level = {2}
        color = 'white'
      >
          Geração atual: {selectGen}
      </StyledHeading>
      <StyledPlay>
        <ImagePlay />
        <GameCard />
      </StyledPlay>
    </>
  );
};   

export default Play;

