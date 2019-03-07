async function asyncFunc() {
  let a = await Promise.resolve(1)
  let b = 2
  let c = await Promise.resolve(3)
  let array = [a + b, a * b / c]
  console.log(array)
}
asyncFunc()
