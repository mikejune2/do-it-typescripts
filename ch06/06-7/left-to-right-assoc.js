// 점 연산자 .
let person = {address: {country: 'Korea'}}
let f = x => y => x + y

console.log(
  person.address.country, // Korea
  person["address"]["country"], // Korea
  f(1)(2) // 3
)
