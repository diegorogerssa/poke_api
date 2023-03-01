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
    height: 85px;
    width: 85px;
    font-size:2.5rem;
    color: #ececec;
`;

export default StyledPointsLife;