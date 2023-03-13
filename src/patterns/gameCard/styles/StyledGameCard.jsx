import styled, { css } from 'styled-components';
import cursor from '../../../assets/ditto-cursor.cur';

export const StyledWrapper = styled.section`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: ${theme.light.palette.secondary.yellow};
  border-radius: 20px 20px 0 0;
  `}
@media (min-width: 321px) and (max-width: 480px) {
  
}
@media (min-width: 481px) and (max-width: 768px) {
  
}

@media (min-width: 769px) and (max-width: 1024px) {
  height: 50%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  height: 50%;
}

@media (min-width: 1281px) {
  width: 50%;
  height: 80%;
  border-radius: 0 20px 20px 0;
}
`;

export const StyledAlfa = styled.button` 
    ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 8%;
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
    font-size: 4rem;
}
@media (min-width: 1281px) {
    font-size: 4rem;
}
    `}
`;

export const StyledNamePokemon = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw; 
    height: 25%;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-weight: bold;
    color: #535353;
    background-color: #f7cc46;
    border-radius: 60px 60px 0 0;
    
    li {
      display: flex;
      flex: 0 2 100px;
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
    }

  @media (min-width: 321px) and (max-width: 480px) {
    li {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    li {
      font-size: 2.3rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    li {
      font-size: 2.5rem;  
    }
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    /* height: 60%; */
    li {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 1281px) {
    height: 30%;
    width: 90%;
    li {
      width: 95%;
      height: 30%;
      font-size: 2.8rem;
    }
}
`;