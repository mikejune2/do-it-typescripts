export default function makePerson({name, age}: {name, age}) {
  return `name: ${name} age:${age}`
}
console.log(
  makePerson({name: "Kal", age: 22})
)

