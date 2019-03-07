const fact = n => n == 0 ? 1 : n * fact(n-1)
console.log(
  fact(3), fact(4)
)
