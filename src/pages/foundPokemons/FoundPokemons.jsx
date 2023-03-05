import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../services/api/api';  
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import StyledFoundPokemons from './StyledFoundPokemons';

const FoundPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const[foundPokemon, setFoundPokemon] = useState(true);


  useEffect(() => {
    const foundPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
    // console.log(foundPokemons);
    if (!foundPokemons) {
      setFoundPokemon(false);
      return;
    }
    const promisse = Promise.all(foundPokemons.map(async (id) => {
      const res = await getPokemon(id);
      return res;
    }));

    promisse.then((res) => {
      setPokemons(res);
    }
    ); 

  }, []);




  return (
    <StyledFoundPokemons>
  
      {
        foundPokemon &&
        pokemons.map((pokemon) => {
          return <StyledGerericWrapper
            justifyContent='space-around'
            flexDirection='column'
            flex-wrap='wrap'
            width='130px'
            height='130px'
            height480='130px'
            width480='130px'
            height768='130px'
            width768='130px'
            height1024='130px'
            width1024='130px'
            height1280='130px'
            width1280='130px'
            width1281='130px'
            height1281='130px'
            margin='5px'
            key={pokemon.id}
            // flexDirection='column'
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </StyledGerericWrapper>;
        }
        )
      }
      {
        !foundPokemon &&
        <StyledGerericWrapper>
          <p>Voce ainda nao encontrou nenhum pokemon</p>
        </StyledGerericWrapper>
      }
    </StyledFoundPokemons>
  );
};

export default FoundPokemons;