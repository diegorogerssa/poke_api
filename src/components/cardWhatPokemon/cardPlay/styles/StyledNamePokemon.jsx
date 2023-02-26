import styled from 'styled-components';

const StyledNamePokemon = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95%; 
    height: 10%;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-weight: bold;
    color: #535353;
    background-color: #f7cc46;
  

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    border-radius: 3px;
    border: none;
    font-size: 2rem;
    font-family: ${({theme}) => theme.light.font.press};
    text-align: center;
    font-weight: bold;
    color: ${({theme}) => theme.light.palette.primary.blueDark};
    margin: 2px;
    background-color: ${({theme}) => theme.light.palette.auxiliary.white};
    /* border: #535353; */
  }
`;

export default StyledNamePokemon;