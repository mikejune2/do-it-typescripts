const range = (from, to) => from < to ? [from, ...range(from+1, to)] : []
module.exports = range
