import {pipe} from './pipe'
const f = x => `f(${x})`
const g = x => `g(${x})`
const h = x => `h(${x})`

const composedFunc = pipe(f, g, h)
let y = composedFunc('x')
console.log(y)
