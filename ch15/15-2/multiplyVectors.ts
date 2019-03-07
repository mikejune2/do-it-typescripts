export type vector = any[]

export const multiplyVectors = (a: vector) => (b:vector) => {
  let left, right
  if(a.length <= b.length)
    [left, right] = [a, b]
  else
    [left, right] = [b, a]

  return left.map((value, index) => value * right[index])
}

export const sum = (array, initValue=0) => 
array.reduce((sum, value) => sum + value, initValue)
