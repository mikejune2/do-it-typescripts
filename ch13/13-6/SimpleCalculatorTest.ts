import SimpleCalculator from './SimpleCalculator'

let cal = new SimpleCalculator

cal.add(1)
cal.subtract(2)
cal.multiply(3)
cal.divide(4)

console.log(
  cal.value()
)
