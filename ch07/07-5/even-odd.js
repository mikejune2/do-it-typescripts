const range = (from, to) => from <= to ? [from, ...range(from+1, to)] : []

const filter = (array, callback) => {
  let result = []
  for(let index=0; index < array.length; ++index) {
    const value = array[index]
    if(callback(value, index))
      result = [...result, value]
  }
  return result
}
let toTen = range(1, 10)
const odds = filter(toTen, value => value % 2) // 홀수
console.log("odds", odds)
const evens = filter(toTen, value => !(value % 2)) // 짝수
console.log("evens", evens)

