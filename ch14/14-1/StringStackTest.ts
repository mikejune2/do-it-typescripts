import Stack from './Stack'

const strStack = new Stack<string>()
strStack.push("hello").push("world").push("!")

while(!strStack.isEmpty()) {
  console.log(strStack.pop())
}
