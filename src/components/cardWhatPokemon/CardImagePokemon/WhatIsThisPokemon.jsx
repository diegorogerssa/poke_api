import React, { useContext } from 'react';
import styled from 'styled-components';
import DataContext from '../../../contexts/DataContext';
// import Header from '../../header/Header';

import StyledGerericWrapper from '../../shared/styled/StyledGerericWrapper';


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72%;
  /* padding: 10vh 0 0 0; */
  background-color: ${(props) => props.background};
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center center;
  border: 10px solid #ffffff;
  

  img { 
  width:80%;
  background-color: transparent;
  filter: ${(props) => props.filter};
  transition: all 2s ease-in-out;
  transform: ${(props) => props.transform};
  }


@media (min-width: 321px) and (max-width: 480px) {
  align-items: center;
  border: none;
  height: 50%;
  img {
    width: 80%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  border: none;
  height: 45%;
  img {
    width: 50%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* padding: 15vh 0 0 0; */
  border: none;
  height: 50%;
  img {
    width: 45%;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  border: none;
  height: 50%;
  img {
    width: 45%;
  }
}

@media (min-width: 1281px) {  
    height: 80%;
    width: 50%;
    border-radius: 20px 0 0 20px;
    img {
    width: 70%;
  }
}
`;

const CardPokemon = () => {
  const { pokemon } = useContext(DataContext);
  // console.log(loser);

  return (
    
    <CardContainer 
      background ='#3E5CA2'
    >
      <StyledGerericWrapper
        height480='50vh'
        height1281='80%'
        filter = 'brightness(0)'
        backgroundColor='transparent'>
        <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} />
      </StyledGerericWrapper>
    </CardContainer>
  );
};

export default CardPokemon;



