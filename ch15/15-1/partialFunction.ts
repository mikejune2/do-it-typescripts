{type NumFunc = (number) => number
function add(x: number) : NumFunc {
  const fn: NumFunc = function(y: number): number { return x + y }
  return fn
}
let add1: NumFunc = add(1)
console.log(
  add1(2),
)}
