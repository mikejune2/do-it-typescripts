{function add(x:number): (y:number) => number {
  const fn = function(y: number): number { return x + y }
  return fn
}
let add1: (y:number) => number = add(1)
let result1: number = add1(2)}
