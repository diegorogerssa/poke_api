import React from 'react';
import StyledSelect from './style/StyledSelect';

// eslint-disable-next-line react/prop-types
const SelectGen = ({ activeGen }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <StyledSelect onClick= { activeGen }>
      <option value="0" >todos</option>
      <option value="1">1º geração</option>
      <option value="2">2º geração</option>
      <option value="3">3º geração</option>
      <option value="4">4º geração</option>
      <option value="5">5º geração</option>
      <option value="6">6º geração</option>
      <option value="7">7º geração</option>
      <option value="8">8º geração</option>
    </StyledSelect>
  );
};

export default SelectGen;


