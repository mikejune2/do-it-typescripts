import {callArity1And2Func} from './function'
const f = a => a
const g = (a, b) => a + b
console.log(
  callArity1And2Func(f, g)
)
