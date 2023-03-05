import styled, { css } from 'styled-components';
import cursor from '../../../../assets/ditto-cursor.cur';


const StyledAlfa = styled.button` 
    ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 8%;
    /* border-radius: 2px; */
    border: none;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    color: #535353;
    margin: 2px;
    padding: 5px;
    font-family: 'Potta One', cursive;
    background-color: ${theme.light.palette.auxiliary.white};
    cursor:  url(${cursor}), auto;
    border-radius: 40px 10px 10px 10px;

@media (min-width: 321px) and (max-width: 480px) {
        font-size: 2.8rem;

}

@media (min-width: 481px) and (max-width: 768px) {
    font-size: 3.5rem;
}

@media (min-width: 769px) and (max-width: 1024px) {
    font-size: 3.5rem;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 5rem;

}

@media (min-width: 1281px) {
    font-size: 5rem;
}
    `}
`;

export default StyledAlfa;