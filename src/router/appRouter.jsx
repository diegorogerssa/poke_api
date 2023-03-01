// # crie as rotas da página home e about com react-router-dom versão 6
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/about/about';
import Details from '../pages/details/Details';
import FoundPokemons from '../pages/foundPokemons/FoundPokemons';
import Home from '../pages/home/Home';
import Play from '../pages/play/Play';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/play" element={<Play />}  />
        <Route path="/about" element={<About />} />
        <Route path= "/foundpokemons" element={<FoundPokemons />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;



