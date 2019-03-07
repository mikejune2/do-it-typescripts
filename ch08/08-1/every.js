const isArrayEveryOdd = array => array.every(n => n % 2)
const isArrayEveryEven = array => array.every(n => !(n % 2))

console.log(
  isArrayEveryOdd([1, 3, 5, 7]),
  isArrayEveryEven([2, 6, 10, 12]),
)
