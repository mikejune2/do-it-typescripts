let twoDimensionalArray = [[1, 2], [3, 4]]
let result = []
for(let element of twoDimensionalArray) {
  let tmp = []
  for(let value of element) {
    tmp = [value, ...tmp]
  }
  result = [tmp, ...result]
}
console.log(result)
