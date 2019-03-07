function inc(x) { return x + 1 }
console.log(
inc(1),
inc.call(null, 1),
  inc.apply(null, [1])
)
