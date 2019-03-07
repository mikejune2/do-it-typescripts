{function print_PrintablePerson(instance) {
  console.log(instance.name, instance.age)
}
class PrintablePersonWithThis {
  name
  age
  printMe() { 
    print_PrintablePerson(this)
  }
}
let person = new PrintablePersonWithThis
person.name = "Jane"; person.age = 22
person.printMe()}
