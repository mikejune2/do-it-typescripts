interface IAddable {
  add(value: number)
}
interface IAddSubtractable extends IAddable {
  subtract(value: number)
}
interface IAddSubtractMupliplyable extends IAddSubtractable {
  multiply(value: number)
}
interface IAddSubtractMupliplyDividable extends IAddSubtractMupliplyable {
  device(value: number)
}
interface ICalculatable2 extends IAddSubtractMupliplyDividable {
  value()
  clear()
}
