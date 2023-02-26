import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../contexts/DataContext';
import { getPokemon } from '../../utils/data';
import { DetailsStyled } from './DetailsStyled';

const Details = () => {
  const [speciesData, setSpeciesData] = React.useState([]);
  const { objectData } = React.useContext(DataContext);
  console.log(objectData);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSpecies() {
      const species = await getPokemon(id);
      setSpeciesData(species); 
    }
    fetchSpecies();
    console.log(speciesData);
  }, [id]);

  const object = speciesData.find((object) => object.id === id);
  console.log(object);

  return (
    <DetailsStyled>
      {/* <h1>{object.name}</h1>
      <img src={object.image} alt={object.name} />
      <p>{object.description}</p> */}
    </DetailsStyled>
  );
};

export default Details;