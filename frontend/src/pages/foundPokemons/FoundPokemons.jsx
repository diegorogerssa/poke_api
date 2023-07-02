import React, { useEffect, useState } from 'react';
// import { getPokemon } from '../../services/api/api';  
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import StyledFoundPokemons from './StyledFoundPokemons';
import StyledPagination from './StyledPagination';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import StyledWrapperFound from './StyledWrapperFound';
import Wrapper from './Wrapper';
import SelectGen from '../../components/inputs/selectGen/SelectGen';
import { intervalGeneration } from '../../utils/generation';


const FoundPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [foundPokemon, setFoundPokemon] = useState(true);
  const [gen, setGen] = useState(0);
  const [interval, setInterval] = useState(0);
  const itemsPerPage = 50;
  
  // const navigate = useNavigate();

  useEffect(() => {
    const foundPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
    // console.log(foundPokemons);
    if (!foundPokemons) {
      setFoundPokemon(false);
      
      return;
    }

    

    // const promisse = Promise.all(foundPokemons.map(async (id) => {
    //   const res = await getPokemon(id);
    //   return res;
    // }));

    // promisse.then((res) => {
    setPokemons(foundPokemons);
    // }); 

  }, []);

  const activeGen = (e) => {
    setGen(Number(e.target.value));
    
  };

  useEffect(() => {
    const interval = intervalGeneration(gen);
    setInterval(interval);
    // console.log(interval);
  }, [gen]);

  

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  let pokemonGen = [];
  if (interval.length === 0 ){
    pokemonGen = pokemons;
  }else{
    pokemonGen = pokemons.filter((ele) => ele.id >= interval[0] && ele.id <= interval[1]);

  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonGen.slice(indexOfFirstItem, indexOfLastItem);

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
      
      <SelectGen  
        activeGen={activeGen}
      />
      
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
                
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.id} />
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
