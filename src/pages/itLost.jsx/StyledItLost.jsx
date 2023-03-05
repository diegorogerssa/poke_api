import styled from 'styled-components';
import back from '../../assets/loser-background.png';


const StyledItLost = styled.section`
  //popup
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: transparent;
  
  
  div{
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
  }
  img{
    width: 30%;
    background-color: transparent;

  }
  p{
    font-size: 1.5rem;
    font-weight: bold;
    color: #535353;
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 9%;
    /* border-radius: 2px; */
    border: none;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    margin: 1px;
    background-color: #CD3529;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  }

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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 90%;
}

`;

export default StyledItLost;

