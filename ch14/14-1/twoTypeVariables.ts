{function first<S, T>(a: S, b: T): S { return a }

console.log(
  first<number, boolean>(1, true),
  first<boolean, string>(true, "hello"),
  first<string, string[]>("hello", ["hello"]),
)}
