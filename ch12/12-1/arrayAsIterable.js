const iter = [1, 2, 3, 4][Symbol.iterator]()
while(true) {
  const {value, done} = iter.next()
  if(done) break
  console.log(value)
}
