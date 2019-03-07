const createRangeIterator = require('./createRangeIterator')
const iter = createRangeIterator(1, 5)

while(true) {
  const {value, done} = iter.next()
  if(done) break
  console.log(value)
}
