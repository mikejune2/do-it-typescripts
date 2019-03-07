import Animal from './Animal'

export default class Cow extends Animal {
  constructor(name: string) { super(name ) }
  say() { 
    super.say()
    console.log(`(Actually I'm a Cow.)`) 
  }
}
