import {ICalculator} from './ICalculator'

export default class Calculator implements ICalculator {
  constructor(private _value: number = 0) {}

  value(): number { return this._value }
  clear() { this._value = 0; return this }
  add(value: number) { this._value += value; return this }
  subtract(value: number) { this._value -= value; return this }
  multiply(value: number) { this._value *= value; return this }
  divide(value: number) { this._value /= value; return this }
}
