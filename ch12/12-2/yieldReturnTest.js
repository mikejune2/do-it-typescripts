const {random, gen} = require('./yieldReturn')
const iter = gen()
while(true) {
  const {value, done} = iter.next(random(10, 1))
  if(done) break
  console.log(value)
}
