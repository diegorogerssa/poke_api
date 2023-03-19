import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100px;
  height: 100%;
  border: none;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
  margin: 5px;
  background-color: #2a4075;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);
  
  cursor: pointer;
  &:hover {
    background-color: #4b6cb7;
  }
`;

export default StyledSelect;