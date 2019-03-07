import Just from './Just'
import Nothing from './Nothing'

type MaybeT<T> = Just<T> | Nothing
export default class Maybe<T> {
  static Just = Just
  static Nothing = Nothing
  private justOrNothing: Just<T> | Nothing
  constructor(value: any) {
    this.justOrNothing = (value != undefined && value != null && 
      false == value instanceof Error) ? new Just(value) : new Nothing
  }

  // utilities
  isJust(): boolean { return this.justOrNothing instanceof Just }
  isNothing(): boolean { return this.justOrNothing instanceof Nothing }
  getOrElse<R>(elseValue: R) : T | R {
    return this.justOrNothing.getOrElse(elseValue)
  }

  // applicative
  static of<R>(value: R) : Just<R> { return new Just<R>(value) }
  of<R>(value: R) : Just<R> { return new Just<R>(value) }

  // functor, apply, chain
  map<R>(callback: Function) : Just<R> | Nothing { 
    return this.justOrNothing.map(callback) 
  }
  ap<A extends { map(value) }>(app: A): A { return this.justOrNothing.ap(app) }
  chain<R>(callback: (T) => R): R | Nothing { 
    return this.justOrNothing.chain(callback) 
  }
}
