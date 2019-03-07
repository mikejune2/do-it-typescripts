export default interface IStackT<T> {
  push(value: T) : this
  pop() : T
  isEmpty() : boolean
}
