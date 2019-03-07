function* fn() { yield* [1, 2] }
function* gen() {
  yield* fn()
  yield 3
  yield* [4, 5]
}
for(let value of gen())
  console.log(value)
