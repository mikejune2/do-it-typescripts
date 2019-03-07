const isPromise = require('./isPromise')

const person = {name: "Jane", age: 22}
const promise = new Promise(resolve => resolve(1))

console.log(
  isPromise(person),
  isPromise(promise)
)
