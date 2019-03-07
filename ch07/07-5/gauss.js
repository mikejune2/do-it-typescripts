const range = (from, to) => from <= to ? [from, ...range(from+1, to)] : []
const reduce = (array, callback, initValue) => {
  let result = initValue
  for(let i=0; i < array.length; ++i) {
    const value = array[i]
    result = callback(result, value)
  }
  return result
}
const add = (result, value) => result + value
console.log(
  reduce(range(1, 100), add, 0)
)
