const createRangeIterator = require('./createRangeIterator')

class Rangeable {
  constructor(max=5, min=1) {
    this.min = min; this.max = max
  }
  [Symbol.iterator]() {
    return createRangeIterator(this.min, this.max)
  }
}
module.exports = Rangeable
