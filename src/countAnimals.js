const data = require('../data/zoo_data');

const allSpecies = data.species.reduce((acc, item) => {
  acc[item.name] = item.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) {
    return allSpecies;
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return allSpecies[specie];
  }
  return data.species.find((item) => item.name === specie)
    .residents.filter((item2) => item2.sex === sex).length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
