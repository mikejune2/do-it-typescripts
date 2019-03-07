import Identity from './Identity'
[
  // functor test
  new Identity(1).map(value => `hello ${value}`).value,
  // apply test
  new Identity(value => value + 1)
    .ap(new Identity(1)).value, // 2
  new Identity(a => b => a + b)
    .ap(new Identity(1))
    .ap(new Identity(2)).value, // 1 + 2 = 3
  new Identity(a => b => c => a + b + c)
    .ap(new Identity(1))
    .ap(new Identity(2))    
    .ap(new Identity(3)).value, // 1 + 2 + 3 = 6   
  // applicative test
  Identity.of("hello").value,
  new Identity(1).of("world").value,
  // chain test
  new Identity(1).chain(value => new Identity(value + 1)).value
].forEach(value => console.log(value))
