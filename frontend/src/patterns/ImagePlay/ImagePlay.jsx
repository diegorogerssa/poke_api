import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import StyledImage from '../../components/dataDisplay/StyledImage';
import StyledImagePlay from './StyledImagePlay';


const ImagePlay = () => {
  const { pokemon } = useContext(DataContext);

  const handleContextmenu = (e) => {
    e.preventDefault();
  };

  return (
    
    <StyledImagePlay 
      background ='#3E5CA2'
    >
      <StyledGerericWrapper
        height480='50vh'
        height1281='80%'
        filter = 'brightness(0)'
        backgroundColor='transparent'>
        <StyledImage width= '90%' src={pokemon?.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} draggable="false" onContextMenu={handleContextmenu}/>
      </StyledGerericWrapper>
    </StyledImagePlay>
  );
};

export default ImagePlay;



