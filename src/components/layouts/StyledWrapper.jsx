import styled from 'styled-components';

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection? flexDirection : 'row'};
  justify-content: ${({ justifyContent }) => justifyContent? justifyContent : 'center'};
  align-content: center;
  align-items: center;
  align-items: center;
  width: 100vh;
  min-height: 90vh; 
  background-color: transparent;
  `;

export default StyledWrapper;