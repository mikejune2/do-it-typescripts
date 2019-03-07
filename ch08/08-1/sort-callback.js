const ascending = (a, b) => a < b ? -1: a > b ? 1 : 0
let a= [2, 8, 3, 7].sort(ascending)
console.log(a)

const descending = (a, b) => -ascending(a, b)
let b = [2, 8, 3, 7].sort(descending)
console.log(b)
