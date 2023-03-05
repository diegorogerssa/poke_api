import styled from 'styled-components';
import back from '../../assets/loser-background.png';


const StyledItWinner = styled.section`
  //popup
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
   width: ${props => props.width? props.width : '60px'};
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

`;

export default StyledItWinner;

