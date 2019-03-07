import Point2D from './Point2D'
import Point3D from './Point3D'

const pt3 = new Point3D(1, 2, 3)
console.log(
  pt3.move(3, 4, 5).move(-3, -4, -5).value(),
  pt3.move(...new Point2D(1, 1).value()).value()
)
