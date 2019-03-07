{function identity<T>(arg:T): T { return arg }

console.log(
  identity<number>(1),
  identity<boolean>(true),
  identity<string>("hello"),
  identity<object>({hello: 1}),
  identity<string[]>(["hello", "world"])
)}
