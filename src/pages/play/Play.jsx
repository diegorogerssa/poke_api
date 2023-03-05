/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { StyledPlay } from './StyledPlay';
import Card from '../../components/card/card';
import CardImagePokemon from '../../components/cardWhatPokemon/CardImagePokemon/WhatIsThisPokemon';
import CardWhatIsNamePokemon from '../../components/cardWhatPokemon/cardPlay/WhatIsNamePokemon';
import Loading from '../../components/loading/Loading';
import DataContext from '../../contexts/DataContext';



const Play = () => {

  const { pokemon } = useContext(DataContext);
  if (pokemon.length === 0){
    return <Loading />;
  }
  return (
    <StyledPlay>
      <CardImagePokemon />
      <CardWhatIsNamePokemon />
    </StyledPlay>
  );
};   

export default Play;

