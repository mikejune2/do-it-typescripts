let dec = function(x) { return x - 1 }
let value0 = dec(1)
let value1 = (function(x) { return x -1 })(1)
console.log(value0, value1)
