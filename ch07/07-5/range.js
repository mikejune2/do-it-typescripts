const range = (from, to) => from <= to ? [from, ...range(from+1, to)] : []
console.log(range(1, 100).toString())