import styled from 'styled-components';
import heart from '../../../../assets/heart.svg';

const StyledPointsLife = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${heart});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-color: transparent;
    height: 80px;
    width: 80px;
    font-size:2.5rem;
    color: #ececec;
   /* position: absolute;
   left: 15%;
   top: 57%; */

@media (min-width: 321px) and (max-width: 480px) {


}

@media (min-width: 481px) and (max-width: 768px) {
    width: 100px;
    height: 100px;
}

@media (min-width: 769px) and (max-width: 1024px) {

}

@media (min-width: 1025px) and (max-width: 1280px) {

}

@media (min-width: 1281px) {
        width: 130px;
        height: 130px;  
}
`;

export default StyledPointsLife;