import IStackT from './IStackT'

export default class Stack<T> implements IStackT<T> {
  constructor(protected _values: T[] = []) {}

  push(value: T) : this {
    this._values = [value, ...this._values] 
    return this 
  }
  pop() : T { 
    const [head, ...tail] = this._values 
    this._values = tail; 
    return head   
  }
  isEmpty() : boolean { return !this._values.length }
}
