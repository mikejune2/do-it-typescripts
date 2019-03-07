{function print_PrintablePerson(instance) {
  console.log(instance.name, instance.age)
}
class PrintablePersonWithoutThis {
  name
  age
}
let instance = new PrintablePersonWithoutThis
instance.name = "Jane"; instance.age = 22
print_PrintablePerson(instance)}
