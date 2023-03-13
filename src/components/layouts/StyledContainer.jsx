import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({width}) => width || '100%'};
  min-height: ${({height}) => height || '100%'}; 
  background-color: transparent;
  `;

export default StyledContainer;