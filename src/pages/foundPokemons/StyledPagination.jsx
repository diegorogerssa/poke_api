import styled from 'styled-components';

const StyledPagination = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #3e5ca2;
  border-radius: 0 0 0 0;
  font-weight: bold;
  border: none;
  margin: 0;

  padding: 5px;
  gap: 0;

  button {
    width: 3%;
    height: 30px;
    border-radius: 5px;
    font-weight: bold;
    border: none;
    margin: 0;
    filter: brightness(1);
    padding: 0;
    gap: 0;
    margin: 2px;

    :focus {
      outline: none;
      background-color: #3e5ca2;
      filter: brightness(0.8);
      color: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1.2rem;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      /* box-shadow: 0 0 0px #ffffff; */

      /* :hover {
        filter: brightness(0.8);
        background-color: #3e5ca2;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 5px;
        font-weight: bold;
        font-size: 1.2rem;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        box-shadow: 0 0 10px #ffffff; */

        /* :active {
          filter: brightness(0.8);
          background-color: #3e5ca2;
          color: #ffffff;
          border: 1px solid #ffffff;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1.2rem;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          box-shadow: 0 0 1px #000000; */

        }


  }
  
  @media (min-width: 321px) and (max-width: 480px) {
   
  }
  @media (min-width: 481px) and (max-width: 768px) {
  
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
  
  }
  @media (min-width: 1281px) {
   
  }
`;

export default StyledPagination;