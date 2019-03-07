class Left {
  constructor(value) { this.value = value }
  map(callback) { return this }
}

class Right {
  constructor(value) { this.value = value }
  map(callback) { return new Right(callback(this.value)) }
}

const calcValue = value => {
  try {
    if(value <= 0) throw new Error("value should be greater than 0")
    return new Right(value/10)
  } catch(e) {
    return new Left(e.message)
  }
}
console.log([
  calcValue(0),
  calcValue(10),
  calcValue(0).map(x => x + 10000).map(x => x * 34),
  calcValue(10).map(x => x + 10000).map(x => x * 34),
])
