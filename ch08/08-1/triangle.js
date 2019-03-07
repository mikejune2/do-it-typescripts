const range = (from, to) => from <= to ? [from, ...range(from+1, to)] : []

const flatten = (result, value) => [...result, ...value]

const generatePossibleTriangles = maxNumber => 
  range(1, maxNumber).map(c => 
    range(1, c).map(b => 
      range(1, b).map(a => [a, b, c]))
  ).reduce(flatten, []).reduce(flatten, [])

console.log(
  generatePossibleTriangles(5)
    .filter(([a, b, c]) => a*a + b*b == c*c)
)
