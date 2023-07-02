import styled from 'styled-components';

export const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
  }

  p {
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: large;
    
  }
`;