import Maybe from './Maybe'
[
  // functor test
  new Maybe(1).map(x => x + 1).getOrElse("nothing"),
  new Maybe(undefined).getOrElse("nothing"),
  Maybe.of(1).map(x => x + 1).getOrElse("nothing"),
  // apply test
  new Maybe(x => x + 1).ap(new Maybe(1)).getOrElse("nothing"),
  new Maybe(x => x + 1).ap(new Maybe(undefined)).getOrElse("nothing"),
  Maybe.of(x => x + 1).ap(Maybe.of(1)).getOrElse("nothing"),
  // chain test
  new Maybe(1).chain(x => new Maybe(x + 1)).getOrElse("nothing"),
  new Maybe(undefined).chain(x => new Maybe(x + 1)).getOrElse("nothing"),
  Maybe.of(1).chain(x => Maybe.of(x + 1)).getOrElse("nothing"),
].forEach(value => console.log(value))
