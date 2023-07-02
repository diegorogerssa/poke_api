import React from 'react';
import styled from 'styled-components';
import loading from '../../assets/loading/loading.png';

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #3C5AA0;
  img {
    width: 300px;
  
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <img src={ loading } alt="loading" />
    </StyledLoading>
  );
};

export default Loading;