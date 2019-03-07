import Sparrow from './Sparrow'

const jack = new Sparrow("jack")
let allKeys = []
for(let key in jack)
  allKeys.push(key)

console.log("allKeys", allKeys)
