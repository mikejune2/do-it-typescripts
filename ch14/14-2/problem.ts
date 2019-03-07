interface ISquare { tag:'square', size: number }
interface IRectangle { tag: 'rectangle', width: number, height: number }
interface ICircle { tag: 'circle', radius: number }
type Shape = ISquare | IRectangle | ICircle

class TagImpl {
  constructor(public tag) {}
}
class Square extends TagImpl implements ISquare {
  constructor(public size: number) { super('square') }
}
class Rectangle extends TagImpl implements IRectangle {
  constructor(public width: number, public height: number) { super('rectangle') }
}
class Circle extends TagImpl implements ICircle  {
  constructor(public radius: number) { super('circle') }
}

function area(s: Shape): number {
  switch(s.tag) {
    case 'square': return s.size * s.size
    case 'rectangle': return s.width * s.height
    case 'circle': return Math.PI * s.radius * s.radius
  }
  return 0
}

console.log(
  area(new Square(10))
)
