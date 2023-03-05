import React, { useContext } from 'react';
import poke from '../../assets/pokebola-loser.png';
import DataContext from '../../contexts/DataContext';
import StyledItLost from './StyledItLost';

const ItLost = () => {
  const { handleReload} = useContext(DataContext);

  return (
    <StyledItLost>
      <div>
        <img src={poke} alt="icon-poke" />
        <p>O jogo acabou</p>
        <button
          onClick={handleReload}
        >
          Tentar Novamente</button>
      </div>
    </StyledItLost>
  );
};

export default ItLost;