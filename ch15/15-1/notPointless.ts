const notPointlessMap = array => callback => array.map(callback)
const notPointless = notPointlessMap([1, 2, 3])
console.log(
  notPointless(x => x + 1),
  notPointless(x => x * x )
)
