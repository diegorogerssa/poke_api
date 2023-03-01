/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { StyledPlay } from './StyledPlay';
import Card from '../../components/card/card';
import CardImagePokemon from '../../components/cardWhatPokemon/WhatIsThisPokemon';
import CardWhatIsNamePokemon from '../../components/cardWhatPokemon/cardPlay/WhatIsNamePokemon';



const Play = () => {

  return (
    <StyledPlay>
      <CardImagePokemon />
      <CardWhatIsNamePokemon />
    </StyledPlay>
  );
};   

export default Play;

