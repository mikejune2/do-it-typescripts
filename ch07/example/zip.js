const makeObject = (key, value) => ({[key]: value})
const mergeObjects = (...objs) => {
  let result = {}
  for(let index=0; index < objs.length; ++index) {
    Object.assign(result, objs[index])
  }
  return result
}
const zip = (keys, values) => {
  const len = Math.min(keys.length, values.length)
  let parts = []
  for(let index = 0; index < len; ++index) {
    let key = keys[index], value = values[index]
    parts = [...parts, makeObject(key, value)]
  }
  return mergeObjects(...parts)
}
console.log(
  zip(['a', 'b', 'c'], [1, 2, 3])
)
