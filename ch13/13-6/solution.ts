interface IValuable {
  clear() : this
}
interface ICalculatable {
  add(value: number) : this
}
class SimpleCalculator implements IValuable, ICalculatable {
  constructor(private _value: number = 0) {}
  value() { return this._value }
  clear(): this { this._value = 0; return this }
  add(value: number): this { this._value += value; return this }
}
let cal = new SimpleCalculator
console.log(
  cal.clear().add(3).value()
)

