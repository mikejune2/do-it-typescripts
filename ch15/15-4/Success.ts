import Failure from './Failure'

export default class Success<T> { 
  constructor(public value: T | Function) {} 
  isSuccess : boolean = true
  isFailure : boolean = false
  // applicative spec
  of(value) { return new Success<T>(value)}
  //functor spec
  map(callback) { 
    return this.of(callback(this.value)) 
  }
  // apply spec
  ap(b) { 
    return b.isFailure ? b : b.map(this.value) 
}
}
