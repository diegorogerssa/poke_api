import React, { useEffect, useContext, useState, useRef } from 'react';
import DataContext from '../../../contexts/DataContext';
import LoserPopup from '../LoserPopup';
import StyledWapper from './styles/StyledWapper';
import StyledNamePokemon from './styles/StyledNamePokemon';
import StyledPointsLife from './styles/StyledPointsLife';
import StyledGerericWrapper from '../../shared/styled/StyledGerericWrapper';
import StyledAlfa from './styles/StyledAlfa';
import StyledHeading from '../../shared/styled/StyledHeading';
import StyledPokebola from './styles/StyledPokebola';
import StyledSpanPokeball from './styles/StyledSpanPokeball';
import poke from '../../../assets/pokebola-loser.png';
import { Link } from 'react-router-dom';
import pokedex from '../../../assets/pokedex.svg';
import pokeWin from '../../../assets/pokebola-wins.png';



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
  const [pokeball, setPokeball] = useState(1000);
  const alphabetRefs = useRef([]);


  
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
        }
      });
    }
  };


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

  useEffect(() => {
    // const initialPoke = 2;
    const getPokeballs = localStorage.getItem('pokeballs');
    if(getPokeballs) {
      setPokeball(getPokeballs);
    } 
    // else {
    //   localStorage.setItem('pokeballs', initialPoke);
    // }
  }, []);

  useEffect(() => {
    setArray(arrayFill);
  }, [pokemon]);

  useEffect(() => {
    localStorage.setItem('pokeballs', pokeball);
  }, [pokeball]);

  useEffect(() => {
    verifyWinner();
  }, [array]);

  useEffect(() => {
    if (pointsLife < 1 ){
      setLoser(true);
    }
  }, [pointsLife]);
  
  return (
    loser ? <LoserPopup /> :
      <StyledWapper
        winColor = {winner ? '#02e202' : '#f7f7f7'}
      >
        {
          !winner &&
          <StyledGerericWrapper
            flexDirection='column'
            width='300px'
            height='80px'
            backgroundColor= 'transparent'
            
          >
            <StyledHeading level={2}>Quem é esse pokemon?</StyledHeading>
            <Link to="/foundpokemons" style={{backgroundColor:'transparent', color: 'black'}}>
              <img src={ pokedex } style={{width: '20px', backgroundColor:'transparent'}} alt="" />
            </Link>
          </StyledGerericWrapper>
        }
        {
          winner &&
         <StyledGerericWrapper
           flexDirection='column'
           width='300px'
           height='80px'
           backgroundColor= 'transparent'
           
         >
           <StyledHeading level={2}>Parabéns</StyledHeading>
           <Link to="/foundpokemons" style={{backgroundColor:'transparent', color: 'black'}}>
             <img src={ pokedex } style={{width: '20px', backgroundColor:'transparent'}} alt="" />
           </Link>
         </StyledGerericWrapper>
        }
        {array.length > 0 &&
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
        }
        {
          !winner &&
        <StyledGerericWrapper
          justifyContent = 'center'
          height = '20vh'
          width =  '50vw'
          backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
        >
          <StyledPointsLife>{pointsLife}</StyledPointsLife>
          <StyledGerericWrapper
            justifyContent = 'space-around'
            height = '85px'
            width =  '85px'
            backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
            onClick = {usePokeball}
          >
            <StyledPokebola src={poke} />   
            <StyledSpanPokeball>{ pokeball }</StyledSpanPokeball>
            
          </StyledGerericWrapper>   
        </StyledGerericWrapper>
        } 
        {
          winner &&
            <StyledGerericWrapper
              justifyContent = 'space-around'
              flexDirection = 'column'
              height = '20vh'
              width =  '50vw'
              backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
            >
              <StyledHeading
                level={3}
                textAlign = 'center'
              >Parábens você encontrou o { pokemon.name } e ganhou uma pokebola</StyledHeading>
              <StyledGerericWrapper
                justifyContent = 'space-around'
                height = '85px'
                width =  '85px'
                backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
                onClick = {usePokeball}
              >
                
              
                <StyledPokebola src={pokeWin} />   
                <button onClick={() => window.location.reload()}>jogar novamente</button>
              </StyledGerericWrapper>
            </StyledGerericWrapper>      
           
        }  
        <StyledGerericWrapper>
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
