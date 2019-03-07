const rangeIterable = require('./rangeIterable')

const iter = rangeIterable[Symbol.iterator](5)
while(true) {
  const {value, done} = iter.next()
  if(done) break
  console.log(value)
}
