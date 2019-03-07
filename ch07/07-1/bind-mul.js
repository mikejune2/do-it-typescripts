function mul(y) { return this.x * y }

let two = {x: 2}
let mulBound = mul.bind(two)
console.log(
  mulBound(3),
  mul.call(two, 3),
)
