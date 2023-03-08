// # crie as rotas da página home e about com react-router-dom versão 6
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import About from '../pages/about/about';
import Details from '../pages/details/Details';
import FoundPokemons from '../pages/foundPokemons/FoundPokemons';
import Home from '../pages/home/Home';
import ItLost from '../pages/itLost.jsx/ItLost';
import ItWinner from '../pages/itWinner/ItWinner';
import Play from '../pages/play/Play';
import { useLocation } from 'react-router-dom';


const AppRouter = () => {
  const { pathname } = useLocation();
  return (
    <>
      { pathname !== '/' && <Header /> }
      
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/play" element={<Play />}  />
        <Route path="/itloser" element={<ItLost />}  />
        <Route path="/itwinner" element={<ItWinner />}  />
        <Route path="/about" element={<About />} />
        <Route path= "/foundpokemons" element={<FoundPokemons />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default AppRouter;



