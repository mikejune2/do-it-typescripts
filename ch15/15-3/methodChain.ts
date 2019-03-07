import Identity from './Identity'

console.log(
  Identity.of(x => y => x + y)
    .ap(Identity.of(1))
    .ap(Identity.of(2))
    .map(value => value * value)
    .chain(value => new Identity(value + 1))
    .map(value => value - 1)
    .chain(value => new Identity(value * 3))
    .value
)
