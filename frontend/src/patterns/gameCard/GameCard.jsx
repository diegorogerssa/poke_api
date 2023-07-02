import React, { useEffect, useContext, useState, useRef } from 'react';
import DataContext from '../../contexts/DataContext';
// import StyledWrapper from './styles/StyledGameCard';
// import StyledNamePokemon from './styles/StyledNamePokemon';
// import StyledPointsLife from './styles/StyledPointsLife';
import StyledGerericWrapper from '../../components/shared/styled/StyledGerericWrapper';
import { StyledWrapper, StyledAlfa, StyledNamePokemon  } from './styles/StyledGameCard';
import heart from '../../assets/heart.png';
import poke from '../../assets/pokebola-loser.png';
// import StyledPokebola from './styles/StyledPokebola';
import { useNavigate } from 'react-router-dom';
import StyleBackgroungImage from '../../components/dataDisplay/StyleBackgroungImage';


const CardWhatIsNamePokemon =  () => {
  const { 
    pokemon,
    winner, 
    setWinner,
    loser, 
    setLoser,
    idRandom,
  } = useContext(DataContext);
  // console.log(pokemon);

  const [array, setArray] = useState([]);
  const [pointsLife, setPointsLife] = useState(3);
  const [qtdPokeball, setQtdPokeball] = useState(false);
  const alphabetRefs = useRef([]);
  const [pokeball, setPokeball] = useState(() => {
    const getPokeballs = JSON.parse(localStorage.getItem('pokeballs'));
    return getPokeballs ?? 1000;
  });


  
  const nameArray = pokemon.name 
    ? pokemon.name.split('') 
    : []; 

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .toLowerCase()
    .split('');
    
  const arrayFill = new Array(nameArray.length).fill(' ');
  
  const usePokeball = () => {
    if (pokeball > 0) {
      setPokeball(pokeball - 1);
      const index = array.findIndex((letra) => letra === ' '); 
      const letraIndex = nameArray[index];
      nameArray.filter((letra, i) => {
        if(letra === letraIndex) {
          arrayFill[i] = letraIndex;
          alphabet.filter((letra, i) => {
            if(letra === letraIndex) {
              alphabetRefs.current[i].style.color = '#02e202';
              alphabetRefs.current[i].disabled = true;
              alphabetRefs.current[i].style.cursor = 'not-allowed';
            }
          });
          setArray(prevArray => {
            const newArray = [...prevArray];
            newArray[i] = letraIndex;
            return newArray;
          },);
          setQtdPokeball(!qtdPokeball);
          // console.log(qtdPokeball);
        }
      });
    }
  };
  
  useEffect(() => {
    localStorage.setItem('pokeballs', pokeball);
    // console.log('controlado');
    // console.log(pokeball);

  }, [qtdPokeball]);



  const captureLetter = (e) => {
    const letraCapturada = e.target.innerText;
    nameArray.filter((letra, i) => {
      if(letra === letraCapturada) {
        arrayFill[i] = letraCapturada;
        setArray(prevArray => {
          const newArray = [...prevArray];
          newArray[i] = letraCapturada;
          e.target.style.color = '#02e202';
          e.target.disabled = true;
          e.target.style.cursor = 'not-allowed';
          return newArray;
        },);
      } else if (!nameArray.includes(letraCapturada)) {
        e.target.style.color = '#b40606';
        e.target.disabled = true;
        e.target.style.cursor = 'not-allowed';
        setPointsLife(pointsLife - 1);
      }
    });
  };

  const verifyWinner = () => {
    const stringArray = array.join('');
    const namePokemon = pokemon.name;
    if( stringArray === namePokemon) {
      setWinner(true);
      setPokeball(pokeball + 1);

      const getPokemons = JSON.parse(localStorage.getItem('idsPokemons'));
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
      if (getPokemons) {
        const pokeIds = [...getPokemons,{ id: idRandom, name: pokemon.name, imagem: image}];
        // getPokemons.push(pokeIds);
        localStorage.setItem('idsPokemons', JSON.stringify(pokeIds));
      } else {
        localStorage.setItem('idsPokemons', JSON.stringify([{ id: idRandom, name: pokemon.name, imagem: image}]));
      }
    }
  };


  const navigate = useNavigate();

  useEffect(() => {
    
    if (loser) {
      return navigate ('/itloser');
    } else if (winner) {
      return navigate ('/itwinner');
    }
  }, [loser, winner]);


  

  useEffect(() => {
    setArray(arrayFill);
  }, [pokemon]);



  useEffect(() => {
    verifyWinner();
  }, [array]);

  useEffect(() => {
    if (pointsLife < 1 ){
      setLoser(true);
    }
  }, [pointsLife]);
  
  if (array.length > 0 ) return (
    <StyledWrapper>
      <StyledNamePokemon>
        {
          array.map((letra, i) => {
            return <li key={i} >
              {letra}
            </li>;
          }
          )
        }
      </StyledNamePokemon>        
      <StyledGerericWrapper
        justifyContent = 'center'
        height = '25%'
        height480 = '25%'
        height768 = '25%'
        height1024 = '25%'
        height1280 = '25%'
        height1281 = '25%'
        width1281 = '100%'
        width =  '100vw'
        margin = '10px 0 10px 0'
        gap = '10vw'
        backgroundColor = {({theme}) => theme.light.palette.secondary.yellow}
      >
        <StyleBackgroungImage
          image = {heart}
          justify = 'center'
          align = 'center'
          fontSize = '1.5rem'
          color='#ececec'
        >
          {pointsLife}
        </StyleBackgroungImage>
        <StyleBackgroungImage
          image = {poke}
          justify = 'flex-end'
          align = 'flex-start'
          fontSize = '1.5rem'
          onClick = {usePokeball}
        >
          { pokeball }
        </StyleBackgroungImage>   
          
      </StyledGerericWrapper>
        
      <StyledGerericWrapper
        height = '50%'
        height480= '50%'
        height768 = '50%'
        height1024 = '50%'
        height1280 = '50%'
        height1281 = '50%'
        width1281 = '100%'
        borderRadius1281 = '0 0 20px 0'
        borderRadius = '20px 20px 0 0'
        padding = '10px'
      >
        { 
          alphabet.map((letra, i) => <StyledAlfa 
            key={i} 
            ref={(element) => alphabetRefs.current[i] = element}
            onClick = {captureLetter}>{letra}</StyledAlfa>)
        }
      </StyledGerericWrapper>
    </StyledWrapper>
  );
};

export default CardWhatIsNamePokemon;
