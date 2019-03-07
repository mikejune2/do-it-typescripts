class Adder {
  constructor(public value) {}
  add(value) { this.value = this.value + value }
}

let a = new Adder(0)
a.add(1); a.add(2)
console.log(a)
