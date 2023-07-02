import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height:10vh;
  background-color: #2d4886;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    font-size: 40px;
  }
  div {
    
    font-size: 120px;
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

}
`;

export const StyledImg = styled.img`
    width: ${props => props.width ||  'auto'};
    height: ${props => props.height ||  '100%'};

/* @media (min-width: 321px) and (max-width: 480px) {

}

@media (min-width: 481px) and (max-width: 768px) {
  width:${(props) => props.width768 || '100%'};
  

}

@media (min-width: 769px) and (max-width: 1024px) {
  width:${(props) => props.width1024 || '100%'};
  

}

@media (min-width: 1025px) and (max-width: 1280px) {
  width:${(props) => props.width1280 || '100%'};

}

@media (min-width: 1281px) {
  width: ${props => props.width1281 || '100px'}; */


    `;