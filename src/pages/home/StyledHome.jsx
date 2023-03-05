import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.light.palette.primary.blue};
  border-radius: 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-items: center;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.light.palette.primary.blue};
      border-radius: 0;
    }
  
`;

export const StyledImages = styled.img`
  width: 90vw;

  margin: ${(props) => props.margin || '5px'};
  transition: ${(props) => props.transition || 'all 0.5s ease'};
  
  /* Estilos para telas maiores que 320px e menores que 480px (ex: smartphones em paisagem) */
@media (min-width: 321px) and (max-width: 480px) {
  /* Adicione seus estilos aqui */
}

/* Estilos para telas maiores que 480px e menores que 768px (ex: tablets) */
@media (min-width: 481px) and (max-width: 768px) {
  /* Adicione seus estilos aqui */
  /* width: 70vw; */
}

/* Estilos para telas maiores que 768px e menores que 1024px (ex: laptops) */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Adicione seus estilos aqui */
  /* width: 50vw; */
}

/* Estilos para telas maiores que 1024px e menores que 1280px (ex: monitores menores) */
@media (min-width: 1025px) and (max-width: 1280px) {
  /* Adicione seus estilos aqui */
  width: 50vw;
}

/* Estilos para telas maiores que 1280px (ex: monitores maiores) */
@media (min-width: 1281px) {
  /* Adicione seus estilos aqui */
  width: 35vw;
}
`;

export const StyledButton = styled.button`
width: 90vw;
/* height: 10px; */
padding: 15px;
margin: 10px;
background-color: ${({ theme }) => theme.light.palette.auxiliary.red};
color: ${({ theme }) => theme.light.palette.auxiliary.white};
font-size: 1rem;
font-family: ${({ theme }) => theme.light.font.press};
font-weight: bold;
border: none;
border-radius: 10px;
box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.219);
cursor: pointer;
transition: all 1s ease;
&:hover {
  background-color: ${({ theme }) => theme.light.palette.auxiliary.white};
  color: ${({ theme }) => theme.light.palette.primary.blue};
}


@media (min-width: 321px) and (max-width: 480px) {

    width: 80vw;
}

@media (min-width: 481px) and (max-width: 768px) {
  /* Adicione seus estilos aqui */
  width: 70vw;
}

@media (min-width: 769px) and (max-width: 1024px) {
  width: 50vw;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  width: 50vw;
}

@media (min-width: 1281px) {
  width: 35vw;
}
`;




