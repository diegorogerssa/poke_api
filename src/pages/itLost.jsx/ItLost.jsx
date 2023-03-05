import React, { useContext } from 'react';
import poke from '../../assets/pokebola-loser.png';
import DataContext from '../../contexts/DataContext';
import StyledItLost from './StyledItLost';

const ItLost = () => {
  const { handlePlayReload} = useContext(DataContext);

  return (
    <StyledItLost>
      <div>
        <img src={poke} alt="icon-poke" />
        <p>O jogo acabou</p>
        <button
          onClick={handlePlayReload}
        >
          Tentar Novamente</button>
      </div>
    </StyledItLost>
  );
};

export default ItLost;