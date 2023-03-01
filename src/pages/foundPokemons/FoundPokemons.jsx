import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../services/api/api';  
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';

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
    <div
      style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}
    >
      {
        foundPokemon &&
        pokemons.map((pokemon) => {
          return <StyledGerericWrapper
            width='150px'
            height='150px'
            margin='10px'
            key={pokemon.id}
            flexDirection='column'
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
    </div>
  );
};

export default FoundPokemons;