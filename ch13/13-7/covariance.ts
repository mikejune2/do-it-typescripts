class C {
  c() { console.log('C.c() called')}
}
class D extends C {
  d() { console.log('D.d() called')}
}
class E extends D {
  e() { console.log('E.e() called')}
}
let c: C = new C
let d: C = new D
let e: C = new E