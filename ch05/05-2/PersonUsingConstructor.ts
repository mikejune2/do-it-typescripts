{class PersonUsingConstructor {
  name
  age
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  printMe() { console.log(this.name, this.age) }
}
let jane = new PersonUsingConstructor("Jane", 22)
jane.printMe()}
