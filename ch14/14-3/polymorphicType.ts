class A { name: string }
class B extends A { age: number }
class C extends B { city: string }

function createPerson<T extends A>(data: T) {}
