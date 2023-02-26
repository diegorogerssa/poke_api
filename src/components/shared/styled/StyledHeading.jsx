import styled, { css } from 'styled-components';

const StyledHeading = styled('h1').attrs(({ level}) => ({
  as: `h${level}`,
}))`
${({ theme }) => css`
    color: ${theme.light.font.color};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
    text-align: ${(props) => props.textAlign || 'center'};
`}
`;

export default StyledHeading;
