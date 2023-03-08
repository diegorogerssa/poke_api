import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../services/api/api';  
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import StyledFoundPokemons from './StyledFoundPokemons';
import StyledPagination from './StyledPagination';
import Loading from '../../components/loading/Loading';
import { useNavigate } from 'react-router-dom';

const FoundPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [foundPokemon, setFoundPokemon] = useState(true);
  const itemsPerPage = 24;

  const navigate = useNavigate();

  useEffect(() => {
    const foundPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
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
    }); 

  }, []);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleDetails = (e) => {
    navigate(`/details/${e.target.innerText}`);
  
  };


  if ( !pokemons) {
    <Loading />;
  }
  return (
    
      
        
    <StyledGerericWrapper>
      <StyledPagination>
        {
          pageNumbers.map((number) => {
            return (
              <button
                key={number}
                id={number}
                onClick={handleClick}
              >
                {number}
              </button>
            );
          })
        }
      </StyledPagination>
      <StyledFoundPokemons
      >
      
        {
          foundPokemon &&
          currentItems.map((pokemon) => {
            return (
              <button
                key={pokemon.name}
                onClick={handleDetails}
              >
                <StyledGerericWrapper
                  
                  
                  justifyContent='space-around'
                  flexDirection='column'
                  flex-wrap='wrap'
                  width='28%'
                  height='auto'
                  width480='24%'
                  height480='auto'
                  width768='20%'
                  height768='auto'
                  width1024='18%'
                  height1024='auto'
                  width1280='16%'
                  height1280='auto'
                  width1281='15%'
                  height1281='auto'
                  margin='5px'
                  key={pokemon.id}
                >
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </StyledGerericWrapper>
              </button>
            );
          })
        }
       
        {
          !foundPokemon &&
        <StyledGerericWrapper
          
          height='auto'
          height480='auto'
          height768='auto'
          height1024='auto'
          height1280='auto'
          height1281='auto'
          backgroundColor='#3E5CA2'
        >
          <p style={{ color: '#fff' }}>Voce ainda nao encontrou nenhum pokemon</p>
        </StyledGerericWrapper>
        }
      
      </StyledFoundPokemons>
    </StyledGerericWrapper>
  );
};

export default FoundPokemons;
