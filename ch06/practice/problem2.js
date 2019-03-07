let result = []
for(let x of [1, 2])
  for(let y of [3, 4])
    result = [...result, [x, y]]

let result2 = []
for(let elem of result)
  result2 = [...result2, ...elem]

console.log(result2)
