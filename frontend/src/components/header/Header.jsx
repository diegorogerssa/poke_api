import React, { useContext } from 'react';
import pokedexIcon from '../../assets/pokedexIcon.png';
import { StyledHeader, StyledImg } from './styles/StyledHeader';
import pokedexName from '../../assets/header/pokedex.png';
import play from '../../assets/header/play.png';
import home from '../../assets/header/home.png';
import pokemon from '../../assets/header/pokemon.png';
import DataContext from '../../contexts/DataContext';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const { handlePlayReload, handlePokedexReload, handleHomeReload }  = useContext(DataContext);
  const { pathname } = useLocation();
  const playAndDetails = pathname === '/play'  || pathname.includes('details');

  return (
    <StyledHeader>
      <button onClick={ handleHomeReload }>
        <StyledImg src={ home } alt="play" 
          width='auto'
          height= '60px'
        />
      </button>
      {
        playAndDetails  &&
        <>
          <StyledImg src={ pokemon } alt="pokemon" />
          <button onClick={ handlePokedexReload }>
            <StyledImg src={ pokedexIcon } alt="pokedex"
              width='auto'
              height= '60px'
            />
          </button>
        </>
      }
      {
        pathname === '/foundpokemons'  &&
        <>
          <StyledImg src={ pokedexName } alt="pokedex" />
          <button onClick={ handlePlayReload }>
            <StyledImg src={ play } alt="play"
              width='100px'
            />
          </button>
        </>
      }
    </StyledHeader>
  );
};

export default Header;