import React, { useContext } from 'react';
import styled from 'styled-components';
import DataContext from '../../contexts/DataContext';
import winnerpng from '../../assets/winBackgroung.png';


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 80vh;
  background-color: ${(props) => props.background};
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center center;
  border-radius: 10px 0px 0px 10px;





  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */


  img { 
  width:90%;
  background-color: transparent;
  filter: ${(props) => props.filter};
  transition: all 2s ease-in-out;
  transform: ${(props) => props.transform};
  
  }

`;

const CardPokemon = () => {
  const { pokemon, winner, loser } = useContext(DataContext);
  // console.log(loser);

  return (
    !loser &&
    <CardContainer 
      filter = {winner? 'brightness(1)': 'brightness(0)' } 
      transform = {winner?'scale(1.1)': 'scale(1)'} 
      backgroundImage = {winner? `url(${winnerpng})`: 'none'}
      background = {winner? '#fff': '#3C5AA0'}
    >
      <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} />
    </CardContainer>
  );
};

export default CardPokemon;



