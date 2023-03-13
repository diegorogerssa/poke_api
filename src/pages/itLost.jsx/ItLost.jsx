import React, { useContext } from 'react';
import poke from '../../assets/pokebola-loser.png';
import StyledButton from '../../components/inputs/StyledButton';
import StyledWrapper from '../../components/layouts/StyledWrapper';
import StyledParagraph from '../../components/typography/StyledParagraph.jsx';
import DataContext from '../../contexts/DataContext';
import StyledItLost from './StyledItLost';

const ItLost = () => {
  const { handlePlayReload} = useContext(DataContext);

  return (
    <StyledWrapper>
      <StyledItLost>
        <img src={poke} alt="icon-poke" />
        <StyledParagraph>O jogo acabou</StyledParagraph>
        <StyledButton
          onClick={handlePlayReload}
        >
          Tentar Novamente</StyledButton>
      </StyledItLost>
    </StyledWrapper>
  );
};

export default ItLost;