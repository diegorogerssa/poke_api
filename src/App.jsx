import React from 'react';
import { GlobalStyle } from './theme/GlobalStyle';
import AppRouter from './router/appRouter';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import themes from './theme/themes';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
 height: auto;
  background-color: #3E5CA2;

  
  `;


function App() {
  
  return (
    <>
      <ThemeProvider theme={themes}>
        <AppStyled>
          <AppRouter />
          <GlobalStyle />
        </AppStyled>
      </ThemeProvider>
    </>
  );
}

export default App;
