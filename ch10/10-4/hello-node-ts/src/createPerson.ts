import Chance from 'chance' //const Chance = require('chance')
const chance = new Chance

export function createPerson() {
  return {
    name: chance.name(),
    age: chance.age(),
  }
}
