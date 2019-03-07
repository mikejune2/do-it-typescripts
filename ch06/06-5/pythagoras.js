let triangle = [3, 4]
let sum = 0, index = 0
while(index < 2) {
  sum += triangle[index] ** 2
  index += 1 
}
let length = Math.sqrt(sum)
console.log(length) // 5
