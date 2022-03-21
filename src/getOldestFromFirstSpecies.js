const data = require('../data/zoo_data');
// Filtrar o funcionario
// Buscar os animais
// Buscar o animal mais velho
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const empregado = data.employees.find((item) => item.id === id);
  const primeiroAnimal = empregado.responsibleFor[0];
  const especie = data.species.find((item) => item.id === primeiroAnimal);
  const primeiroDaEspecie = especie.residents.sort((a, b) => b.age - a.age)[0];
  const maisVelho = Object.values(primeiroDaEspecie);
  return maisVelho;
}

module.exports = getOldestFromFirstSpecies;
