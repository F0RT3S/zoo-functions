// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function getSpeciesByIds(...ids) {
//   // seu código aqui
//   const teste = data.species.filter((item) => {
//     console.log(item);
//     if (item.id === ids) {
//       return teste;
//     } return [];
//   });
//   return teste;
// }

function getSpeciesByIds(...ids) {
  // com o filter estava tendo problema de comparar um objeto com uma string, ou seja, ele não fazia a comparação
  // com o map eu consegui pegar o id do meu item (em array de string) e depois faço ele me retornar o elemento de um array que satisfaz a comparação
  return ids.map((item) => data.species.find((item2) => item2.id === item));
}
// console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
