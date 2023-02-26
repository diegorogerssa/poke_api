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
  const { 
    pokemon, 
    winner, 
    setWinner, 
    loser, 
    setLoser 
  } = useContext(DataContext);

  const [array, setArray] = useState([]);
  const [pointsLife, setPointsLife] = useState(3);
  let pokeballRef = useRef(5); //@TODO: Refatorar para usar o useState
  const alphabetRefs = useRef([]);

  const nameArray = pokemon.name 
    ? pokemon.name.split('') 
    : []; 

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .toLowerCase()
    .split('');
    
  const arrayFill = new Array(nameArray.length).fill(' ');
  
  const usePokeball = () => {
    if (pokeballRef.current > 0) {
      pokeballRef.current = pokeballRef.current - 1;
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
      pokeballRef.current = pokeballRef.current + 1;
    }
  };

  useEffect(() => {
    setArray(arrayFill);
  }, [pokemon]);

  useEffect(() => {
    localStorage.setItem('pokeballs', pokeballRef.current);
  }, [pokeballRef.current]);

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
