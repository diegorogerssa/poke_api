import styled, { css } from 'styled-components';
import cursor from '../../../../assets/ditto-cursor.cur';


const StyledAlfa = styled.button` 
    ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9%;
    height: 9%;
    /* border-radius: 2px; */
    border: none;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    color: #535353;
    margin: 1px;
    background-color: ${theme.light.palette.auxiliary.white};
    cursor:  url(${cursor}), auto;
    `}
`;

export default StyledAlfa;