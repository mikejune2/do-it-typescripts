export default class Identity<T> {
  constructor(public value: T) {}
  // functor spec
  map<R>(callback: (T)=>R) { return new Identity<R>(callback(this.value)) }
  // apply spec
  ap<A extends {map(value) }>(app:A): any { return app.map(this.value) }
  // applicative spec
  static of<R>(value: R): Identity<R> { return new Identity<R>(value)}
  of<R>(value: R): Identity<R> { return new Identity<R>(value)}
  // chain spec
  chain<S, R extends {value: S}>(callback: (T) => R) { return callback(this.value) }
}
