import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-size: ${props => props.size? props.size : '1rem'};
    font-weight: bold;
    font-family: ${({ theme}) => theme.light.font.press};
    color: #535353;
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
`;

export default StyledParagraph;