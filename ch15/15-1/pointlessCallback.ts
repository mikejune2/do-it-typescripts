const add = a => b => a + b
const array = [1, 2, 3]
console.log(
  array.map(add(1)),
  array.map(add(2)),
  array.map(add(3)),
)
