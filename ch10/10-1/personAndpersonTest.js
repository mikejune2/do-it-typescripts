class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  makeEmailAcount(domain, com='com') { 
    const first = this.firstName.toLowerCase(),
          last = this.lastName[0].toLowerCase()
    return `${first}${last}@${domain}.${com}` 
  }
}

console.log([
  new Person("Bill", "Gates").makeEmailAcount ('ms'),
  new Person("Steve", "Jobs").makeEmailAcount ('apple'),
  new Person("Larry", "Page").makeEmailAcount ('gmail')
])
