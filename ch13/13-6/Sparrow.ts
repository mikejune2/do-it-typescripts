import Animal from './Animal'
interface IFlyable {
  canFly() : boolean
}
export default class Sparrow extends Animal 
              implements IFlyable {
  constructor(name:string) { super(name) }
  canFly() : boolean { return true }
}
