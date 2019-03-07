class Calculator {
  constructor(public currentValue) {}
  add(value) { this.currentValue += value; return this }
  subtract(value) { this.currentValue -= value; return this }
  multiply(value) { this.currentValue *= value; return this }
  divide(value) { this.currentValue /= value; return this }
}
let currentValue = 
  new Calculator(0).add(2).subtract(1).multiply(4).divide(2).currentValue
console.log(currentValue)