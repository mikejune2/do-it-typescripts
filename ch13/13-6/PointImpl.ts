import IPoint from './IPoint'

export default abstract class PointImpl implements IPoint {
  constructor(protected x: number, protected y: number, protected z: number) {}
  value() : [number, number, number?] { 
    const { x, y, z} = this
    return this.iAm2D() ? [x, y] : [x, y, z]
  }
  abstract move(x:number, y:number, z?:number) : this
  abstract iAm2D() : boolean
}
