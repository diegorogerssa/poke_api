import styled, { css } from 'styled-components';

const StyledGerericWrapper = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'center'};
    flex-direction: ${(props) => props.flexDirection || 'row'};
    justify-items: ${(props) => props.justifyItems || 'center'};
    flex-wrap: ${(props) => props.flexWrap || 'wrap'};
    align-items: ${(props) => props.alignItems || 'center'};
    width: ${(props) => props.width || '90%'};
    height: ${(props) => props.height || '30%'};
    background-color: ${(props) => props.backgroundColor || theme.light.palette.auxiliary.white};
    border-radius: ${(props) => props.borderRadius || '10px'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    border: ${(props) => props.border || 'none'};
    margin: ${(props) => props.margin || '0'};
  `}
  `;

export default StyledGerericWrapper;