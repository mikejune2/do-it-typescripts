export default interface IPoint {
  value(): [number, number, number?]
  move(x:number, y:number, z?:number) : this
  iAm2D() : boolean
}
