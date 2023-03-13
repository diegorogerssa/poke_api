
import React, { useContext } from 'react';
import { StyledPlay } from './StyledPlay';
import GameCard from '../../patterns/gameCard/GameCard';
import ImagePlay from '../../patterns/ImagePlay/ImagePlay';
import Loading from '../../components/loading/Loading';
import DataContext from '../../contexts/DataContext';

const Play = () => {

  const { pokemon } = useContext(DataContext);
  if (pokemon.length === 0){
    return <Loading />;
  }
  return (
    <StyledPlay>
      <ImagePlay />
      <GameCard />
    </StyledPlay>
  );
};   

export default Play;

