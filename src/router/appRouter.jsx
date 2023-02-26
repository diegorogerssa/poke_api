// # crie as rotas da página home e about com react-router-dom versão 6
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/about/about';
import Details from '../pages/details/Details';
import Home from '../pages/home/Home';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;



