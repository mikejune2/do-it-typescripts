import Nothing from './Nothing'

export default class Just<T> { 
  constructor(public value: T) {} 
  isJust() { return true}
  isNothing() { return false }
  getOrElse<R>(_: R | T) : R | T { return this.value }

  //functor spec
  map<R>(callback: Function): Just<R> | Nothing { 
    return new Just<R>(callback(this.value)) 
  }
  // apply spec
  ap<A extends { map(value) }>(app: A): A { return app.map(this.value) }
  // chain spec
  chain<R>(callback: (T) => R): R | Nothing { return callback(this.value) }
}
