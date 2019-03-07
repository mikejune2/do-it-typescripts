const range = (from, to) => from <= to ? [from, ...range(from+1, to)] : []

const repeatStr = (str, count, delim='') => 
  count < 1 ? str : range(1, count).map(_ => str).join(delim)

const hello = "hello"
console.log([
  repeatStr(hello, 0),
  repeatStr(hello, 1),
  repeatStr(hello, 2),
])
