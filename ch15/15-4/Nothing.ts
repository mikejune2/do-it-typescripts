import Just from './Just'

export default class Nothing { 
  getOrElse<R>(elseValue: R) : R { return elseValue }

  // functor spec
  map<R>(_: Function) : Just<R> | Nothing { return this }
  // functor spec
  ap<A extends { map(value) }>(app: A): A { return app }
  // functor spec
  chain<R>(callback: (T) => R): R | Nothing { return this }
}
