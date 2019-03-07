//const createRangeIterator = require('./createRangeIterator')
import {createRangeIterator} from './createRangeIterator'
const iter = createRangeIterator(1, 5)

while(true) {
  const {value, done} = iter.next()
  if(done) break
  console.log(value)
}
