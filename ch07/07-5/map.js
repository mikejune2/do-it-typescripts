const map = (array, callback) => {
  let result = []
  for(let index=0; index < array.length; ++index) {
    const value = array[index]
    result = [...result, callback(value, index)]
  }
  return result
}
