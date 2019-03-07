//const createRangeIterator = require('./createRangeIterator')
import {createRangeIterator} from './createRangeIterator'
export class Rangeable {
  constructor(public max=5, public min=1) {
    //this.min = min; this.max = max
  }
  [Symbol.iterator]() {
    return createRangeIterator(this.min, this.max)
  }
}
//module.exports = Rangeable
