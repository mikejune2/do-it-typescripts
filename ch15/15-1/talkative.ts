{const add = a => b => a + b
const add1 = a => a + 1, add2 = a => a + 2, add3 = a => a + 3
const array = [1, 2, 3]
console.log(
  array.map(value => add(1)(value)),
  array.map(add1),array.map(add3),array.map(add3),
)}
