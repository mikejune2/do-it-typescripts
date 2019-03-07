const createRangeIterator = require('./createRangeIterator')

let iterable = {
  [Symbol.iterator]: (max=5, min=1) => createRangeIterator(min, max)  
}
module.exports = iterable
