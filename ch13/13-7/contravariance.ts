class F {
  f() { console.log('F.f() called')}
}
class G extends F {
  g() { console.log('G.g() called')}
}

let g: G = new G
//let h: G = new F
