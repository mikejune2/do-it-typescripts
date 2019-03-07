export default function makePerson(person: {name, age}) {
  return `name: ${person.name} age:${person.age}`
}
console.log(
  makePerson({name: "Kal", age: 22})
)

