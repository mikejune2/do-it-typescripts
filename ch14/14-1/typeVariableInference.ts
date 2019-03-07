function identity<T>(arg: T): T { return arg }
const I = <T>(arg:T): T => arg

function first<S, T>(a: S, b: T): S { return a }
const second = <S, T>(a: S, b: T) : T => b

class A<T> {
  private _value: T
  constructor(value: T) { this._value = value }
}

console.log(
  identity(true),
  I(1),
  first("hello", 10),
  second("hello", 10),
  new A(["hello", "world"])
)
