const value1 = (function(a, b) { return a + b })(1, 2)
const value2 = ((a, b) => a + b)(1, 2)
console.log(value1, value2)
