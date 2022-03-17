const data = require('../data/zoo_data');

/*
### 3. Implemente a função `getEmployeeByName`

Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

**O que será avaliado**

- Sem parâmetros, retorna um objeto vazio
- Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
- Quando provido o último nome do funcionário, retorna o objeto do funcionário

---
 */

function getEmployeeByName(employeeName) {
  // seu código aqui
  const objFunc = data.employees;
  if (employeeName === undefined) return {};
  return objFunc.find((e) => (e.firstName === employeeName || e.lastName === employeeName)); // Diminui o nome do meu item porque o Lint estava reclamando do tamanho da linha
}

// console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
