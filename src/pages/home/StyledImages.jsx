import styled from 'styled-components';

export const StyledImages = styled.img`
  width: ${(props) => props.width || '100px'};
  margin: ${(props) => props.margin || '20px'};
  transition: ${(props) => props.transition || 'all 0.5s ease'};
  
`;
