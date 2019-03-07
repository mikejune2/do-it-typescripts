class Parent { constructor(public lastName) {} }
class Child extends Parent { 
  constructor(public firstName, public lastName) { super(lastName) } 
}

const getLastName = (person: Parent) => person.lastName

console.log(
  getLastName( new Parent("Obama")),
  getLastName( new Child("Donald", "Trumph")),
)