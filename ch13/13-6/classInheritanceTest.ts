import Animal from './Animal'
import { Cat, Dog } from './CatAndDog'

let animals = [new Animal("animal"), new Cat("tom"), new Dog("jerry")]
animals.forEach(animal => animal.say())
