// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* ### 2. Implemente a função `getAnimalsOlderThan`

Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

**Observações técnicas**

- Deve retornar um valor booleano.

**O que será avaliado**

- Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
espécie possuem a idade mínima especificada. */

function getAnimalsOlderThan(especie, idadeMinima) {
  // seu código aqui
  const objetoAnimais = data.species.find((item) => item.name === especie);
  return objetoAnimais.residents.every((item2) => item2.age > idadeMinima);
}

console.log(getAnimalsOlderThan('snakes', 2));

module.exports = getAnimalsOlderThan;
