import IValueable from './IValueable'
import ICalculatable from './ICalculatable'

export default class SimpleCalculator implements IValueable, ICalculatable {
  constructor(private _value: number = 0) {}
  value() { return this._value }
  clear() { this._value = 0 }
  add(value: number) { this._value += value }
  subtract(value: number) { this._value -= value }
  multiply(value: number) { this._value *= value }
  divide(value: number) { this._value /= value }
}
