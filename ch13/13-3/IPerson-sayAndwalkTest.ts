import sayAndWalk from './sayAndWalk'

let jane = {
  name: "Jane",
  say() {
    const { name, age } = this
    const what = age ? `I'm ${name}, my age is ${age}.` : `I'm ${name}.`
    console.log(what)
  }
}
sayAndWalk(jane)

let tom = {
  name: "Tom",
  age: 22,
  say() {
    const { name, age } = this
    const what = age ? `I'm ${name}, my age is ${age}.` : `I'm ${name}.`
    console.log(what)
  },
  walk() {
    const { name } = this
    console.log(`${name} walks.`)
  }
}
sayAndWalk(tom)
