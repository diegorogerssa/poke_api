import styled from 'styled-components';

const StyledImagePlay = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    /* padding: 10vh 0 0 0; */
    background-color: ${(props) => props.background};
    background-image: ${(props) => props.backgroundImage};
    background-size: cover;
    background-position: center center;
  

@media (min-width: 321px) and (max-width: 480px) {
  align-items: center;
  border: none;
  height: 50%;
  img {
    width:auto;
    height:70%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
    border: none;
    height: 50%;
    
    img {
      width:auto;
    height:80%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
    border: none;
    height: 50%;
    img {
      width:auto;
    height:80%;
      
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    border: none;
    height: 50%;
    img {
      width:auto;
      height:80%;
      
    }
}

@media (min-width: 1281px) {  
    height: 80%;
    width: 50%;
    border: 10px solid #ffffff;
    border-radius: 20px 0 0 20px;
    img {
      width:auto;
      height:100%;
    }
}
`;

export default StyledImagePlay;