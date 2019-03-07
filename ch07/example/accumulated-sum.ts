class Accumulator {
  constructor(public value=0) {}
  add(value) { this.value += value; return this.value }
}

const array = [1, 2, 3, 4, 5]
const acc = new Accumulator
const sum = acc.add.bind(acc)

console.log('original array', array)
console.log('accumulated array', array.map(sum))
