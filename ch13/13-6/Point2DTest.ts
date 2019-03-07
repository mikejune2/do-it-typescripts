import Point2D from './Point2D'

const pt = new Point2D(1, 2)
console.log(
  pt.move(3, 4).move(-3, -4).value()
)
