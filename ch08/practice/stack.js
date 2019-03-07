class Stack {
  constructor() { this.items = [] }
  push(value) { this.items.unshift(value); return this }
  pop() { return this.items.shift() }
  isEmpty() { return !this.items.length}
}

const stack = new Stack
stack.push(1).push(2).push(3) // insert data
console.log('initial stack:', stack.items)

while(!stack.isEmpty()) {
  const value = stack.pop()
  console.log('pop', value)
}
console.log('current stack:', stack.items)
