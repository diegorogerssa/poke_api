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

const CardWhatIsNamePokemon =  () => {
  const { pokemon, winner, setWinner, loser, setLoser } = useContext(DataContext);

  const [array, setArray] = useState([]);
  const [pointsLife, setPointsLife] = useState(3);
  // const [pokeballs, setPokeballs] = useState(5);
  let pokeballRef = useRef(6);

  const nomeArray =pokemon.name
    ? pokemon.name.split('')
    : []; 

  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase().split('');
    
  const arrayFill = new Array(nomeArray.length).fill(' ');
  useEffect(() => {
    setArray(arrayFill);
  
  }, [pokemon]);

  const usePokeball = () => {
    if (pokeballRef.current > 0) {
      pokeballRef.current = pokeballRef.current - 1;
      const index = array.findIndex((letra) => letra === ' '); 
      const letraIndex = nomeArray[index];
      nomeArray.filter((letra, i) => {
        if(letra === letraIndex) {
          arrayFill[i] = letraIndex;
          setArray(prevArray => {
            const newArray = [...prevArray];
            newArray[i] = letraIndex;
            return newArray;
          },);
        }
      });
      console.log('usePokebals', pokeballRef.current);
    }
  };
  useEffect(() => {
    localStorage.setItem('pokeballs', pokeballRef.current);
    console.log('useEffects', pokeballRef.current);
  }, [pokeballRef.current]);

  const stringArray = array.join('');
  const namePokemon = pokemon.name;
  const verifyWinner = () => {
    if( stringArray === namePokemon) {
      setWinner(true);
      pokeballRef.current = pokeballRef.current + 1;
    }
  };
  useEffect(() => {
    verifyWinner();
  }, [array]);

  useEffect(() => {
    if (pointsLife < 1 ){
      setLoser(true);
    }
  }, [pointsLife]);
  

  

  const captureLetra = (e) => {
    const letraCapturada = e.target.innerText;
    nomeArray.filter((letra, i) => {
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
      
      } else if (!nomeArray.includes(letraCapturada)) {
  
        e.target.style.color = '#b40606';
        e.target.disabled = true;
        e.target.style.cursor = 'not-allowed';
        setPointsLife(pointsLife - 1);
      }
    });
  };

  //#bfbfbf
  return (
    loser ? <LoserPopup /> :
      <StyledWapper
        winColor = {winner ? '#02e202' : '#f7f7f7'}
      >
        {
          !winner &&
          <StyledHeading level={2}>Quem é esse pokemon?</StyledHeading>
        }
        {
          winner &&
          <StyledHeading level={2}>Parabéns</StyledHeading>
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
          // border = '1px solid #000'
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
            <StyledSpanPokeball>{ pokeballRef.current }</StyledSpanPokeball>
            
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
              // border = '1px solid #000'
            >
              <StyledHeading
                level={3}
                textAlign = 'center'
              >Parábens você encontrou um Pokemon e ganhou uma pokebola</StyledHeading>
              <StyledGerericWrapper
                justifyContent = 'space-around'
                height = '85px'
                width =  '85px'
                backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
                onClick = {usePokeball}
              >
                
                <StyledPokebola src={poke} />   
                
              </StyledGerericWrapper>      
            </StyledGerericWrapper>
        }  

        <StyledGerericWrapper>
          { 
            alfabeto.map((letra, i) => <StyledAlfa key={i} onClick = {captureLetra}>{letra}</StyledAlfa>)
          }
        </StyledGerericWrapper>
      </StyledWapper>
  );
};

export default CardWhatIsNamePokemon;
