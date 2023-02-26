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

  img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 1rem;
  }

  p {
    width: 100%;
    max-width: 400px;
    text-align: justify;
  }
`;