import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../services/api/api';
import { DetailsStyled } from './DetailsStyled';



const Details = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  
  useEffect(() => {
    const getPoke = async () => {
      const result = await getPokemon(id);
      setPokemon(result);
    };
    getPoke();
  }, []);


  return (
    <DetailsStyled>
      <h1>{ pokemon.name }</h1>

      <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt={pokemon.name}/>
      
      
    </DetailsStyled>
  );
};

export default Details;