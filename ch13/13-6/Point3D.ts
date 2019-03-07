import PointImpl from './PointImpl'

export default class Point3D extends PointImpl {
  constructor(x: number=0, y: number=0, z:number=0) { super(x, y, z) }
  move(x:number, y:number, z:number=0): this {
    this.x += x, this.y += y, this.z += z
    return this
  }
  iAm2D() { return false }
}
