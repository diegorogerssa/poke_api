import React, { useContext } from 'react';
import styled from 'styled-components';
import back from '../../assets/loser-background.png';
import poke from '../../assets/pokebola-loser.png';
import DataContext from '../../contexts/DataContext';

const Container = styled.section`
  //popup
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  
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
    width: 18%;
    height: 40%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  img{
   width: 20%;
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

const LoserPopup = () => {
  const {setLoser} = useContext(DataContext);

  const handleReload = () => {
    setTimeout(() => {
      setLoser(false);
    }, 1000);
    window.location.reload();
      
  };
  return (
    <Container>
      <div>
        <img src={poke} alt="icon-poke" />
        <p>O jogo acabou</p>
        <button
          onClick={handleReload}
        >
          Tentar Novamente</button>
      </div>
    </Container>
  );
};

export default LoserPopup;
