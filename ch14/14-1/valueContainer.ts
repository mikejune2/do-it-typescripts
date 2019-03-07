class Container<T> {
  private _value: T
  constructor(value: T) { this._value = value }
}

console.log(
  new Container<number>(1),
  new Container<boolean>(true),
  new Container<string>("hello"),
)
