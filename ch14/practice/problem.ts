class Animal {
  constructor(public numLegs: number) {}
}

class Bee extends Animal {
  constructor() { super(2) }
}

class Lion extends Animal {
  constructor() { super(4) }
}

function createInstance<A extends Animal>(c: new()=>A): A {
  return new c();
}

console.log(
  createInstance(Lion),
  createInstance(Bee)
)
