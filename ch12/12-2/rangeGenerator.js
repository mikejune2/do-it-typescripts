function* rangeGenerator(min, max) {
  let value = min
  while(value < max) 
    yield value++
}
module.exports = rangeGenerator
