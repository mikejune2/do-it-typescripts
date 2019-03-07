sealed trait Shape
case class Square(size: Int) extends Shape
case class Rectangle(width: Int, height: Int) extends Shape
case class Circle(radius: Int) extends Shape

object AreaTest extends App {
  def area(x: Shape): Double = x match {
    case Square(size) => size * size
    case Rectangle(width, height) => width * height
    case Circle(radius) => java.lang.Math.PI * radius * radius
  }
  println(area(Square(10)))
  println(area(Rectangle(4, 5)))
  println(area(Circle(10)))
}
