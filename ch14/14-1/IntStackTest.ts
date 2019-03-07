import Stack from './Stack'

const intStack = new Stack<number>()
intStack.push(1).push(2).push(3)

while(!intStack.isEmpty()) {
  console.log(intStack.pop())
}
