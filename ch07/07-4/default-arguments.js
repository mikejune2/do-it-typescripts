const makeTitledName = (name, male=true, married=false) => {
  return (male ? "Mr." : married ? "Mrs." : "Miss.") + ' ' + name
}
console.log(makeTitledName("Jack Nicholson"))
console.log(makeTitledName("Tom Jones", true))
console.log(makeTitledName("Susan Bacon", false))
console.log(makeTitledName("Sandra Bullock", false, true))
