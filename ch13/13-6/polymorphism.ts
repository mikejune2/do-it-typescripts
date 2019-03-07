import Animal from './Animal'

export default class Cow extends Animal {
  constructor(name: string) { super(name ) }
  say() { console.log(`${this._name} says 음머~~.`) }
}
