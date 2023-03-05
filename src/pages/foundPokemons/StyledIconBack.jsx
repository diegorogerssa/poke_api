import styled from 'styled-components';

const StyledIconBack = styled.img`
  width: ${(props) => props.width || '25px'};
  height: ${(props) => props.height || '25px'};
  margin: ${(props) => props.margin || '10px'};
  transition: ${(props) => props.transition || 'all 0.5s ease'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
`;

export default StyledIconBack;