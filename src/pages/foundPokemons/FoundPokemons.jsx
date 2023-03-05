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
            width='100px'
            height='100px'
            // height768='150px'
            // width768='20%'
            // height1024='150px'
            // width1024='20%'
            // height1280='150px'
            // width1280='20%'
            // width1281='15%'
            // height1281='150px'
            // margin='5px'
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