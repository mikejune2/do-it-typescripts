class Category<T> {
  constructor(public value: T) {}
  map(cb: (T) => Category<T>) { return new Category(cb(this.value)) }
}
const y = new Category(1).map(value => value + 1)
