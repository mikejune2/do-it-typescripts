import Success from './Success'

export default class Failure<T> { 
  constructor(public value: T[]) {}
  isSuccess : boolean = false
  isFailure : boolean = true
  // applicative spec
  of(value) { return new Failure<T>(value)}
  //functor spec
  map(callback) { 
    return this.of(callback(this.value)) 
  }
  // apply spec
  ap(b) { 
    return b.isFailure ? this.of([...this.value, ...b.value]) : this
  }
}
