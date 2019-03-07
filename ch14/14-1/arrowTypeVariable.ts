{const I = <T>(arg:T): T => arg

console.log(
  I<number>(1),
  I<boolean>(true),
  I<string>("hello"),
  I<object>({hello: 1}),
  I<string[]>(["hello", "world"])
)}
