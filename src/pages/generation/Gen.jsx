import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import StyledWrapper from '../../components/layouts/StyledWrapper';
import poke1  from '../../assets/generations/1.png';
import poke2  from '../../assets/generations/2.png';
import poke3  from '../../assets/generations/3.png';
import poke4  from '../../assets/generations/4.png';
import poke5  from '../../assets/generations/5.png';
import poke6  from '../../assets/generations/6.png';
import poke7  from '../../assets/generations/7.png';
import poke8  from '../../assets/generations/8.png';
import StyledImage from '../../components/dataDisplay/StyledImage';
import { useNavigate } from 'react-router-dom';
import StyledHeading from '../../components/typography/StyledHeading';



const Gen = () => {
  const generations = [poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8];
  const { setSelectGen } = useContext(DataContext);
  // const [generation, setGeneration] = useState(1);
  const navigate = useNavigate();
  
  const handleGeneration = (e) => {
    setSelectGen(Number(e.target.name));
    navigate('/play');
  };

  // useEffect(() => {
  //   setSelectGen(generation);
  // }, [generation]);

  
  
  return (
    <StyledWrapper
      flexDirection = 'column'
    >
      <StyledHeading
        level = {2}
        color = 'white'
        fontSize='2rem'
      >
          Escolha a Geração
      </StyledHeading>
      <div style={{ padding:'20px', width:'100vw', display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {
          generations.map((generation, i) => {
          
            return (
              <button style={{border: 'none', background: 'none', margin: '10px'  }}
            
                key={generation}
                onClick={handleGeneration}
              >
                <StyledImage
                  width='130px'
                  src={generation}
                  name = {i + 1}
                  alt={`Generation ${generation}`}
                />
              </button>
            );
          })
        } 
      </div>

    </StyledWrapper>

  );
};

export default Gen;