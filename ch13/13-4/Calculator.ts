export default class Calculator {
  constructor(private _value: number = 0) {}
  static of(value: number = 0) { return new Calculator(value) }
  value() { return this._value }
  clear() { this._value = 0; return this }
  add(operand: number) { this._value += operand; return this  }
}
