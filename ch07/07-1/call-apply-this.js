function mul(y) { return this.x * y }

let two = {x: 2}
console.log(
  mul(two, 3),
  mul.call(two, 3),
  mul.apply(two, [3])
)
