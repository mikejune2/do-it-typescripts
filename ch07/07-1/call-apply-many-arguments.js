function add3Args(a, b, c) { return a + b + c }
console.log(
  add3Args.call(null, 1, 2, 3),
  add3Args.apply(null, [1, 2, 3])
)
