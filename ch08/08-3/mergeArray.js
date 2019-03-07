const mergeArray = (...arrays) => 
  arrays.reduce((sum, value) => [...sum, ...value], [])

console.log(
  mergeArray([1, 2, 3, 4, 5, 6], [7, 8], [9], [10])
)
