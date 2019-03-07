{const id = (a: any) => a
const I = <T>(a: T) => a

console.log(
  id(1), I(1),
  id(true), I(true),
  id("hello"), I("hello")
)}
