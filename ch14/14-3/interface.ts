interface HaveF { f() : number }

function callFAndG<
  S extends HaveF, 
  T extends { g() : boolean }
>(s: S, t: T) { s.f() && t.g() }
