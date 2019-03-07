const addNumbers = (...numbers) => {
  let result = 0
  for(let index=0; index < numbers.length; ++index)
    result += numbers[index]
  return result
}
console.log(
  addNumbers(),
  addNumbers(1),
  addNumbers(1, 2),
  addNumbers(1, 2, 3),
  addNumbers(1, 2, 3, 4),
  addNumbers(1, 2, 3, 4, 5),
)
