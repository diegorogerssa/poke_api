import React, { useContext } from 'react';
import pokedexIcon from '../../assets/pokedexIcon.png';
import { StyledHeader, StyledImg } from './styles/StyledHeader';
// import { GoHome } from 'react-icons/go';
// import { SiPokemon } from 'react-icons/si';
// import play from '../../assets/header/play.png';
import pokedexName from '../../assets/header/pokedex.png';
import play from '../../assets/header/play.png';
import home from '../../assets/header/home.png';
import pokemon from '../../assets/header/pokemon.png';

import DataContext from '../../contexts/DataContext';
import { useLocation } from 'react-router-dom';


const Header = () => {

  const { handlePlayReload, handlePokedexReload, handleHomeReload }  = useContext(DataContext);
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <button onClick={ handleHomeReload }>
        <StyledImg src={ home } alt="play" 
          width='35px'
          height= 'auto'
          width768='60px'
          width1024='60px'
          width1280='60px'
          width1281='60px'

        />
      </button>
      {
        pathname === '/foundpokemons'   &&
      
        <StyledImg src={ pokedexName } alt="play" 
          height= 'auto'
          width='40%'
          width768='35%'
          width1024='20%'
          width1280='20%'
          width1281='14%'
          
          
        />
      
      }
      {
        pathname === '/play'   &&
        
          <StyledImg src={ pokemon } alt="pokemon" 
            width='40%'
            width768='25%'
            width1024='20%'
            width1280='20%'
            width1281='12%'
          />
       
      }
      {
        pathname === '/play'   &&
        <button onClick={ handlePokedexReload }>
          <StyledImg src={ pokedexIcon } alt="pokedex" 
            width='45px'
            width768='60px'
            width1024='70px'
            width1280='70px'
            width1281='75px'
          />
        </button>
      }
      {
        pathname === '/foundpokemons'   &&
        <button onClick={ handlePlayReload }>
          <StyledImg src={ play } alt="play" 
            width='55px'
            width768='80px'
            width1024='90px'
            width1280='100px'
            width1281='105px'

          />
        </button>
      }
     
    </StyledHeader>
  );
};

export default Header;