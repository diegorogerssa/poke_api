import styled from 'styled-components';
import cursor from '../../assets/ditto-cursor.cur';
import cursor2 from '../../assets/ditto-thinking-cursor.cur';

export const StyledPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 81vh;
  overflow: hidden;
  background-color: ${({theme}) => theme.light.palette.primary.blue};
  cursor:  url(${cursor}), auto;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  @supports (cursor: grab) {
    .meu-elemento {
      cursor: grab;
    }
    &:hover {
      /* background-color: #f7cc46; */
      color: #f7cc46;
      cursor:  url(${cursor2}), auto;
  };
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

}


`;