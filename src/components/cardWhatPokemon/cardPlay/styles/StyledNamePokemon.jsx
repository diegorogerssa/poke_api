import styled from 'styled-components';

const StyledNamePokemon = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw; 
    height: 10vh;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-weight: bold;
    color: #535353;
    background-color: #f7cc46;
    border-radius: 60px 60px 0 0;
    
  

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 50%;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    font-family: ${({theme}) => theme.light.font.press};
    text-align: center;
    font-weight: bold;
    color: ${({theme}) => theme.light.palette.primary.blueDark};
    margin: 2px;
    background-color: ${({theme}) => theme.light.palette.auxiliary.white};
    /* border: #535353; */
  }

  @media (min-width: 321px) and (max-width: 480px) {
    

}

@media (min-width: 481px) and (max-width: 768px) {
  li {
    font-size: 3rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  li {
    font-size: 2.5rem;  
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  height: 60%;
  li {
    height: 90%;
    font-size: 4rem;
  }
}

@media (min-width: 1281px) {
  height: 30%;
  width: 90%;
  li {
    width: 95%;
    height: 30%;
    font-size: 3rem;
  }
}

`;

export default StyledNamePokemon;