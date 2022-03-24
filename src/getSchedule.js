const data = require('../data/zoo_data');

const { species, hours } = data;
const diasDaSemana = Object.keys(hours);
const bichos = species.map(({ name }) => name);
// console.log(bichos);

function animalDia(param) {
  const animais = species.filter((animal) => animal.availability.includes(param))
    .map((bicho) => bicho.name);
  // console.log('teste', animais);
  return animais;
}

function listaSemanal() {
  const obj = {};
  diasDaSemana.forEach((dia) => {
    const frase = `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
    obj[dia] = {
      officeHour: hours[dia].open === 0 ? 'CLOSED' : frase,
      exhibition: dia === 'Monday' ? 'The zoo will be closed!' : animalDia(dia),
    };
  });
  return obj;
}

function getSchedule(scheduleTarget) {
  const teste = listaSemanal();
  if (!scheduleTarget) return teste;
  if (scheduleTarget.includes('Monday')) return { [scheduleTarget]: teste.Monday };
  if (diasDaSemana.includes(scheduleTarget)) return { [scheduleTarget]: teste[scheduleTarget] };
  if (bichos.includes(scheduleTarget)) {
    return species.find(({ name }) =>
      name === scheduleTarget).availability;
  }
  return teste;
}

module.exports = getSchedule;
