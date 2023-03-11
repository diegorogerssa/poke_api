// import React, { useContext, useEffect, useState } from 'react';
// import DataContext from '../../contexts/DataContext';



// const Gen = () => {
//   const { setSelectGen } = useContext(DataContext);
//   const [generation, setGeneration] = useState(1);
  
//   const handleGeneration = (e) => {
//     setGeneration(e.target.value);
//   };

//   useEffect(() => {
//     setSelectGen(generation);
//   }, [generation]);

  
  
//   return <>
//     <select onChange={handleGeneration}>
//       <option value="1">Generation I</option>
//       <option value="2">Generation II</option>
//       <option value="3">Generation III</option>
//       <option value="4">Generation IV</option>
//       <option value="5">Generation V</option>
//       <option value="6">Generation VI</option>
//       <option value="7">Generation VII</option>
//       <option value="8">Generation VIII</option>
//     </select>
//   </>;
// };

// export default Gen;