import styled from 'styled-components';
import cursor from '../../assets/ditto-cursor.cur';
import cursor2 from '../../assets/ditto-thinking-cursor.cur';

export const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 90vw;
  height: 90vh;
  background-color: #9BA0BC;
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



`;