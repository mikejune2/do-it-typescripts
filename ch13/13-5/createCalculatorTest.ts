import {ICalculator, createCalculator} from './createCalculator'

let cal: ICalculator = createCalculator()

console.log(
  cal.clear().add(2).subtract(1).multiply(3).divide(3).value()
)
