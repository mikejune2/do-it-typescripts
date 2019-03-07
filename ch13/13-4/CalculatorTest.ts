import Calculator from './Calculator'

let cal1: Calculator = new Calculator,
    cal2 = new Calculator(10),
    cal3 = Calculator.of(100)

console.log(
  cal1.add(1).add (2).value(), // 3
  cal2.add(1).add (2).value(), // 13
  cal3.add(1).add (2).value(), // 103
)
