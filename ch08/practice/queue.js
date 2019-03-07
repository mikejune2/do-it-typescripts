class Queue {
  constructor() { this.items = [] }
  push(value) { this.items.push(value); return this }
  pop() { return this.items.shift() }
  isEmpty() { return !this.items.length}
}

const queue = new Queue
queue.push(1).push(2).push(3) // insert data
console.log('initial queue:', queue.items)

while(!queue.isEmpty()) {
  const value = queue.pop()
  console.log('pop', value)
}
console.log('current queue:', queue.items)
