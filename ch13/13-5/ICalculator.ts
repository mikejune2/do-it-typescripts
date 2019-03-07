export interface ICalculator {
  value(): number
  
  clear() : ICalculator
  add(value: number) : ICalculator
  subtract(value: number) : ICalculator
  multiply(value: number) : ICalculator
  divide(value: number) : ICalculator
}
