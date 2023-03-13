import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../services/api/api';  
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import StyledFoundPokemons from './StyledFoundPokemons';
import StyledPagination from './StyledPagination';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import StyledWrapperFound from './StyledWrapperFound';
import Wrapper from './Wrapper';

const FoundPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [foundPokemon, setFoundPokemon] = useState(true);
  const itemsPerPage = 50;

  // const navigate = useNavigate();

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

  // const handleDetails = (e) => {
  //   console.log(e);
  //   navigate(`/details/${e.target.innerText}`);
  
  // };


  if ( !pokemons) {
    <Loading />;
  }
  return (
    
      
    <Wrapper>
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
      <StyledWrapperFound>
        <StyledFoundPokemons
        >
          {
            foundPokemon &&
          currentItems.reverse().map((pokemon) => {
            return (
              <Link to={`/details/${pokemon.id}`}
                key={pokemon.id}
              >
                <div
                  
                >
                
                  <img src={pokemon.sprites.front_default} alt={pokemon.id} />
                  <p>{pokemon.name}</p>
                </div>
              </Link>
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
      </StyledWrapperFound>
    </Wrapper>
  );
};

export default FoundPokemons;
