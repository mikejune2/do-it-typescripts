type Arity1 = (number) => number

export function callArity1And2Func<
  F extends Arity1,
  G extends (a:number, b:number) => number
>(f: F, g: G) { return f(1) + g(1, 2) }
