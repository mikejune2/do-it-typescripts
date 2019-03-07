object EitherExample extends App {
  def divideXByY(x: Int, y: Int): Either[String, Int] = {
    if (y == 0) Left("Error: can't divide by 0")
    else Right(x / y)
  }
  
  divideXByY(1, 0) match {
    case Left(s) => println("Answer: " + s)
    case Right(i) => println("Answer: " + i)
  }
}
