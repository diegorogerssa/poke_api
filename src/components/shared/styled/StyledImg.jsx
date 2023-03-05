import styled from 'styled-components';

const StyledImg = styled.img`
  width: ${(props) => props.width || '100px'};
  margin: ${(props) => props.margin || '20px'};
  transition: ${(props) => props.transition || 'all 0.5s ease'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
`;

export default StyledImg;