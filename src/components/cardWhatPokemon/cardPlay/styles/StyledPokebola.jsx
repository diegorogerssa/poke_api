import styled from 'styled-components';
import poke from '../../../../assets/pokebola-loser.png';

const StyledPokebola = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    background-image: url(${poke});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-color: transparent;
    height: 70px;
    width: 70px;
    font-size:1.2rem;
    color: #3c3d3c;

@media (min-width: 321px) and (max-width: 480px) {

}

@media (min-width: 481px) and (max-width: 768px) {
    width: 85px;
    height: 85px;
}

@media (min-width: 769px) and (max-width: 1024px) {

}

@media (min-width: 1025px) and (max-width: 1280px) {

}

@media (min-width: 1281px) {
    width: 110px;
    height: 110px
}
`;  

export default StyledPokebola;