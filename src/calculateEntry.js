const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants1) {
  const visitantes = {
    child: entrants1.filter((child) => child.age < 18).length,
    adult: entrants1.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants1.filter((senior) => senior.age >= 50).length,
  };
  return visitantes;
}

function calculateEntry(entrants2) {
  if (!entrants2) return 0;
  if (Object.keys(entrants2).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants2);
  const precoCriancas = data.prices.child * child;
  const precoAdultos = data.prices.adult * adult;
  const precoSeniors = data.prices.senior * senior;
  const precoTotal = precoCriancas + precoAdultos + precoSeniors;
  return precoTotal;
}

console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
