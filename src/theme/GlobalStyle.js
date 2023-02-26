import { createGlobalStyle } from 'styled-components';
import cursor from '../assets/ditto-cursor.cur';
import cursor2 from '../assets/ditto-thinking-cursor.cur';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #9BA0BC;
        cursor:  url(${cursor}), auto;
        
        @supports (cursor: grab) {
    .meu-elemento {
        cursor: grab;
    }
    &:hover {
        cursor:  url(${cursor2}), auto;
    };
    }
}
`;

