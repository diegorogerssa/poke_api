import styled from 'styled-components';
import back from '../../assets/loser-background.png';


const StyledItLost = styled.div`
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
  

@media (min-width: 321px) and (max-width: 480px) {

}

@media (min-width: 481px) and (max-width: 768px) {
/* Adicione seus estilos aqui */
}

@media (min-width: 769px) and (max-width: 1024px) {

}

@media (min-width: 1025px) and (max-width: 1280px) {
}

@media (min-width: 1281px) {
  
}

`;

export default StyledItLost;

