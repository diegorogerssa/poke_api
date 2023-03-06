// import React, { useEffect, useState } from 'react';
// import { getPokemon } from '../../services/api/api';  
// import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
// import StyledFoundPokemons from './StyledFoundPokemons';

// const FoundPokemons = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const[foundPokemon, setFoundPokemon] = useState(true);


//   useEffect(() => {
//     const foundPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
//     // console.log(foundPokemons);
//     if (!foundPokemons) {
//       setFoundPokemon(false);
//       return;
//     }
//     const promisse = Promise.all(foundPokemons.map(async (id) => {
//       const res = await getPokemon(id);
//       return res;
//     }));

//     promisse.then((res) => {
//       setPokemons(res);
//     }
//     ); 

//   }, []);




//   return (
//     <StyledFoundPokemons>
  
//       {
//         foundPokemon &&
//         pokemons.map((pokemon) => {
//           return <StyledGerericWrapper
//             justifyContent='space-around'
//             flexDirection='column'
//             flex-wrap='wrap'
//             width='130px'
//             height='130px'
//             height480='130px'
//             width480='130px'
//             height768='130px'
//             width768='130px'
//             height1024='130px'
//             width1024='130px'
//             height1280='130px'
//             width1280='130px'
//             width1281='130px'
//             height1281='130px'
//             margin='5px'
//             key={pokemon.id}
//             // flexDirection='column'
//           >
//             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//             <p>{pokemon.name}</p>
//           </StyledGerericWrapper>;
//         }
//         )
//       }
//       {
//         !foundPokemon &&
//         <StyledGerericWrapper>
//           <p>Voce ainda nao encontrou nenhum pokemon</p>
//         </StyledGerericWrapper>
//       }
//     </StyledFoundPokemons>
//   );
// };

// export default FoundPokemons;


import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../services/api/api';  
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import StyledFoundPokemons from './StyledFoundPokemons';
import StyledPagination from './StyledPagination';

const FoundPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  const [foundPokemon, setFoundPokemon] = useState(true);
  const itemsPerPage = 24;
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
      <StyledFoundPokemons>
        {
          foundPokemon &&
        currentItems.map((pokemon) => {
          return <StyledGerericWrapper
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
          </StyledGerericWrapper>;
        })
        }
        {
          !foundPokemon &&
        <StyledGerericWrapper>
          <p>Voce ainda nao encontrou nenhum pokemon</p>
        </StyledGerericWrapper>
        }
      
      </StyledFoundPokemons>
    </StyledGerericWrapper>
  );
};

export default FoundPokemons;
