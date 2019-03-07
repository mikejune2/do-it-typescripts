function* func1() { yield 1 }
function* func2() { yield 2 }
function* gen() { 
  yield* func1()
  yield* func2()
}
for(let value of gen()) console.log(value)
