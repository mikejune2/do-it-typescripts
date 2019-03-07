import Chance from 'chance'
const chance = new Chance

export default class Person {
  constructor(
    public name = chance.name(),
    public age = chance.age(),
    public email = chance.email(),
    public phone = chance.phone()
  ) {}
  getKeys(delim = ',') {
    return Object.keys(this).join(delim)
  }
  getValues(delim = ',', keys=undefined) {
    return (keys ||Object.keys(this)).map(key => this[key]).join(delim)
  }
}
