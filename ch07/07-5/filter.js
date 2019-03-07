const filter = (array, callback) => {
  let result = []
  for(let index=0; index < array.length; ++index) {
    const value = array[index]
    if(callback(value, index))
      result = [...result, value]
  }
  return result
}
