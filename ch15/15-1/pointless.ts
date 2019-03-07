const pointlessMap = callback => array => array.map(callback)
const pointless = pointlessMap(x => x + 1)
console.log(
  pointless([1, 2, 3]),
  pointless([10, 20, 30])
)
