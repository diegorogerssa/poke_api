import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import DataContext from '../../contexts/DataContext';
// import styled from 'styled-components';
import CardPokemon from '../CardPokemon';


const CardStyled = styled.ul`
  display:flex;
  flex-wrap: wrap;
  justify-content:flex-end;
  align-items: stretch;
  width: 328px;
  height: 102px;
  background-color: #286aa3;
  border-radius: 15px;
  margin-top: 50px;

  `;


const Details = () => {
  const { objectData } = React.useContext(DataContext);
  console.log(objectData);
  return (
    <CardStyled>
      <CardPokemon>
        <h1>Bulbasaur</h1>
      </CardPokemon>
    </CardStyled>
    //   {objectData.map((objectData) => (
    //     <li key={objectData.name}>
    //       <Link to={`/details/${objectData.id}`} key={objectData.id}>
    //         {objectData.name}
    //         <img src={objectData.image} alt={objectData.name} />
    //       </Link>
    //     </li>
        
  //   ))}
  // </CardStyled>
  );
};

export default Details;