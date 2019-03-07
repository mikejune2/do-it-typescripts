const calcValue = value => {
  try {
    if(value <= 0) throw new Error("value should be greater than 0")
    return [value/ 10, null]
  } catch(e) {
    return [null, e]
  }
}
const main = () => {
  const [value, err] = calcValue(0)
  if(err) {
    console.error('Error', err.message)
  } else {
    console.log('value', value)
  }
}
main()
