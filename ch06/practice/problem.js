let result = []
for(let x of [1, 2])
  for(let y of [1, 2])
    result = [...result, [x, y]]

console.log(result)
