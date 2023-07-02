import generationData from './generationData.js';

export const generation = (gen) => {
  let random = 1;
  generationData.forEach((generation) => {
    if (generation.number === gen) {

      // console.log('geração selecionada:', generation.number);
      // console.log(gen);
      let min = generation.range[0];
      let max = generation.range[1];
      random = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }); 
  return random;
};



export const intervalGeneration = (gen) => {
  const intervalGen = [];
  generationData.forEach((generation) => {
    if (generation.number === gen) {
      intervalGen.push(generation.range[0], generation.range[1]);
    }
  }); 
  return intervalGen;
};


