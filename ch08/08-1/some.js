const hasArrayOdd = array => array.some(n => n % 2)
const hasArrayEven = array => array.some(n => !(n % 2))

console.log(
  hasArrayOdd([1, 2, 4, 6]),
  hasArrayEven([2, 3, 5, 7]),
)
