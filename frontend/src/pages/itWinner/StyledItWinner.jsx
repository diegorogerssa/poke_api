import styled from 'styled-components';
import back from '../../assets/loser-background.png';


const StyledItWinner = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    background-color: #fff;
    border-radius: 10px;
    background-image: url(${back});
    background-size: cover;
    background-position: center center;
    width: 290px;
    height: 400px;
    padding-top: 10px;
    padding-bottom: 10px;
  

`;

export default StyledItWinner;

