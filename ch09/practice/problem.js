const value = calcValue(0).map(x => x + 10000).map(x => x * 34).value
console.log(value)

function calcValue(value) {
  class Left {
    constructor(value) { this.value = value }
    map(callback) { return this }
  }
  
  class Right {
    constructor(value) { this.value = value }
    map(callback) { return new Right(callback(this.value)) }
  }
  
  try {
    if(value <= 0) throw new Error("error")
    return new Right(value/10)
  } catch(e) {
    return new Left(e.message)
  }
}
