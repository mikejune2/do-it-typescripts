export default class Animal {
  constructor(protected _name:string) {}
  say() : void { console.log(`I'm ${this._name} (Animal)`) }
}
