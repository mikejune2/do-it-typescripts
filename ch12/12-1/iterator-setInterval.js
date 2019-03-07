const rangeIterable = require('./rangeIterable')
const iter = rangeIterable[Symbol.iterator](100+1)

let result = 0
const period = 50
const id = setInterval(() => {
  const {value, done} = iter.next()
  const work = () => {
    result += value
  }
  const report = () => console.log('result', result)

  done ? (clearInterval(id), report()) : work()
}, period)
