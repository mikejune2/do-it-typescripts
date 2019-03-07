const asyncReturn = async() => {
  return 1
}

asyncReturn()
  .then(value => console.log(value))
