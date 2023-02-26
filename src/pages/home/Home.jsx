/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { HomeStyled } from './HomeStyled';
import Card from '../../components/card/card';
import CardImagePokemon from '../../components/cardWhatPokemon/WhatIsThisPokemon';
import CardWhatIsNamePokemon from '../../components/cardWhatPokemon/cardPlay/WhatIsNamePokemon';
import { getPokemon } from '../../services/api/api';
import DataContext from '../../contexts/DataContext';


const Home = () => {

  const { setPokemon } = useContext(DataContext);

  React.useEffect(() => {
    async function getPokemonData() {
      // const random = Math.floor(Math.random() * 1008) + 1;
      // console.log(random);
      const pokemonData = await getPokemon(151);
      setPokemon(pokemonData);
    }
    getPokemonData();
  }, []);
  return (
    <HomeStyled>
      <CardImagePokemon />
      <CardWhatIsNamePokemon />
    </HomeStyled>
  );
};   

export default Home;

