import styled from 'styled-components';

const StyledImage = styled.img`
    width: ${props => props.width? props.width : '60px'};
    background-color: transparent;
`;

export default StyledImage;