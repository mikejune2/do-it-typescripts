const f = (a, b) => {
  a.splice(a.length, 0, ...b)
  return a
}
console.log(
  f([1, 2], [3, 4])
)
