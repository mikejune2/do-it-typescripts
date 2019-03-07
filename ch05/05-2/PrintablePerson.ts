class PrintablePerson {
  name
  age
  printMe() { 
    console.log(this.name, this.age)
  }
}
let pp = new PrintablePerson
pp.name = "Jane"; pp.age = 22
pp.printMe()
