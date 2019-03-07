async function func() {
  const value = await Promise.resolve("async function")
  console.log(value)
}

const expr = async () => {
  const value = await Promise.resolve("async function expression")
  console.log(value)
}

func()
expr()
