import PointImpl from './PointImpl'

export default class Point2D extends PointImpl {
  constructor(x: number=0, y: number=0) { super(x, y, 0) }
  move(x:number, y:number, _?:number): this {
    this.x += x, this.y += y
    return this
  }
  iAm2D() : boolean { return true }
}
