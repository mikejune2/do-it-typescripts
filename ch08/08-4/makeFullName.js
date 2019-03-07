const makeFullName = ({firstName, lastName}) => `${firstName} ${lastName}`

console.log([
  makeFullName({firstName:"Jane", lastName: "Eyre"}),
  makeFullName({firstName:'Albert', lastName: "Einstein"}),
])
