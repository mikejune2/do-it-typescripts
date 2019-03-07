const prepend = (array, item) => [item, ...array]
const append = (array, item) => [...array, item]

let a = []
a = prepend(a, 3)
a = prepend(a, 2)
a = prepend(a, 1)
console.log(a)

a = append(a, 4)
a = append(a, 5)
a = append(a, 6)
console.log(a)
