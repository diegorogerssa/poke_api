import React, { useEffect, useContext, useState, useRef } from 'react';
import DataContext from '../../../contexts/DataContext';
import StyledWapper from './styles/StyledWapper';
import StyledNamePokemon from './styles/StyledNamePokemon';
import StyledPointsLife from './styles/StyledPointsLife';
import StyledGerericWrapper from '../../shared/styled/StyledGerericWrapper';
import StyledAlfa from './styles/StyledAlfa';

import StyledPokebola from './styles/StyledPokebola';
import { useNavigate } from 'react-router-dom';


const CardWhatIsNamePokemon =  () => {
  const { 
    pokemon,
    winner, 
    setWinner,
    loser, 
    setLoser,
    idRandom,
  } = useContext(DataContext);

  const [array, setArray] = useState([]);
  const [pointsLife, setPointsLife] = useState(3);
  const [qtdPokeball, setQtdPokeball] = useState(false);
  const alphabetRefs = useRef([]);
  const [pokeball, setPokeball] = useState(() => {
    const getPokeballs = JSON.parse(localStorage.getItem('pokeballs'));
    return getPokeballs ?? 1000;
  });


  
  const nameArray = pokemon.name 
    ? pokemon.name.split('') 
    : []; 

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .toLowerCase()
    .split('');
    
  const arrayFill = new Array(nameArray.length).fill(' ');
  
  const usePokeball = () => {
    if (pokeball > 0) {
      setPokeball(pokeball - 1);
      const index = array.findIndex((letra) => letra === ' '); 
      const letraIndex = nameArray[index];
      nameArray.filter((letra, i) => {
        if(letra === letraIndex) {
          arrayFill[i] = letraIndex;
          alphabet.filter((letra, i) => {
            if(letra === letraIndex) {
              alphabetRefs.current[i].style.color = '#02e202';
              alphabetRefs.current[i].disabled = true;
              alphabetRefs.current[i].style.cursor = 'not-allowed';
            }
          });
          setArray(prevArray => {
            const newArray = [...prevArray];
            newArray[i] = letraIndex;
            return newArray;
          },);
          setQtdPokeball(!qtdPokeball);
          console.log(qtdPokeball);
        }
      });
    }
  };
  
  useEffect(() => {
    localStorage.setItem('pokeballs', pokeball);
    console.log('controlado');
    console.log(pokeball);

  }, [qtdPokeball]);



  const captureLetter = (e) => {
    const letraCapturada = e.target.innerText;
    nameArray.filter((letra, i) => {
      if(letra === letraCapturada) {
        arrayFill[i] = letraCapturada;
        setArray(prevArray => {
          const newArray = [...prevArray];
          newArray[i] = letraCapturada;
          e.target.style.color = '#02e202';
          e.target.disabled = true;
          e.target.style.cursor = 'not-allowed';
          return newArray;
        },);
      } else if (!nameArray.includes(letraCapturada)) {
        e.target.style.color = '#b40606';
        e.target.disabled = true;
        e.target.style.cursor = 'not-allowed';
        setPointsLife(pointsLife - 1);
      }
    });
  };

  const verifyWinner = () => {
    const stringArray = array.join('');
    const namePokemon = pokemon.name;
    if( stringArray === namePokemon) {
      setWinner(true);
      setPokeball(pokeball + 1);

      const getPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
      if (getPokemons) {
        const pokeIds = [...getPokemons, idRandom];
        localStorage.setItem('idsPokemons', JSON.stringify(pokeIds));
      } else {
        localStorage.setItem('idsPokemons', JSON.stringify([idRandom]));
      }
    }
  };


  const navigate = useNavigate();

  useEffect(() => {
    
    if (loser) {
      return navigate ('/itloser');
    } else if (winner) {
      return navigate ('/itwinner');
    }
  }, [loser, winner]);


  

  useEffect(() => {
    setArray(arrayFill);
  }, [pokemon]);



  useEffect(() => {
    verifyWinner();
  }, [array]);

  useEffect(() => {
    if (pointsLife < 1 ){
      setLoser(true);
    }
  }, [pointsLife]);
  
  if (array.length > 0 ) return (
    <StyledWapper>
      <StyledNamePokemon>
        {
          array.map((letra, i) => {
            return <li key={i} >
              {letra}
            </li>;
          }
          )
        }
      </StyledNamePokemon>        
      <StyledGerericWrapper
        justifyContent = 'center'
        height = '15vh'
        height480 = '10vh'
        height768 = '15vh'
        height1024 = '9vh'
        height1280 = '40%'
        height1281 = '20%'
        width1281 = '100%'
        width =  '100vw'
        // margin = '10px 0 10px 0'
        gap = '10vw'
        backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
      >
        <StyledPointsLife>{pointsLife}</StyledPointsLife>
        <StyledPokebola
          onClick = {usePokeball}
        >{ pokeball }</StyledPokebola>   
          
      </StyledGerericWrapper>
        
      <StyledGerericWrapper
        height = '30vh'
        height480= '23vh'
        height768 = '30vh'
        height1024 = '30vh'
        height1280 = '65%'
        height1281 = '50%'
        width1281 = '100%'
        borderRadius1281 = '0 0 20px 0'
        borderRadius = '20px 20px 0 0'
        padding = '10px'
      >
        { 
          alphabet.map((letra, i) => <StyledAlfa 
            key={i} 
            ref={(element) => alphabetRefs.current[i] = element}
            onClick = {captureLetter}>{letra}</StyledAlfa>)
        }
      </StyledGerericWrapper>
    </StyledWapper>
  );
};

export default CardWhatIsNamePokemon;
