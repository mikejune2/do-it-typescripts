function forEach(array, callback) {
  for(let index=0; index < array.length; ++index) {
    let value = array[index]
    callback(value, index)
  }
}
forEach([1, 2, 3], (value, index)=> console.log(value))