const Chance = require('chance')
const chance = new Chance

function createPerson() {
  return {
    name: chance.name(),
    age: chance.age(),
  }
}
module.exports = createPerson
