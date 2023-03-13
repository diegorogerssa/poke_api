import styled, { css } from 'styled-components';

const StyledHeading = styled('h1').attrs(({ level }) => ({
  as: `h${level}`,
}))`
${({ theme }) => css`
    color: ${(props) => props.color || theme.light.palette.auxiliary.black};
    font-size: ${(props) => props.fontSize || '1.5rem'};
    font-family: ${(props) => props.fontFamily || 'Potta One, cursive'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    letter-spacing: ${(props) => props.letterSpacing || '0'};
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
    text-align: ${(props) => props.textAlign || 'center'};
    text-shadow: ${(props) => props.textShadow || 'none'};
`}
`;

export default StyledHeading;
