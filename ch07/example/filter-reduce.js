const range = (from, to) => from <= to ? [from, ...range(from+1, to)] : []

const result = range(1, 6)
    .filter(value => value % 2)
    .reduce((result, value) => result * value)
console.log(result)
