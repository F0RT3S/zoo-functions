const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const stephanie = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const emery = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';
  const burl = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const ola = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';

  return data.employees.some(() => (id === stephanie || id === emery || id === burl || id === ola));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((item) => item.managers.includes(managerId))
      .map((item2) => `${item2.firstName} ${item2.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
