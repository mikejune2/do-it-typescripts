const asyncThrow = async() => {
  throw new Error("error")
}

asyncThrow()
  .catch(error => console.error(error.message))
