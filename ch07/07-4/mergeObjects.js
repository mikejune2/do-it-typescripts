const mergeObjects = (...objs) => {
  let result = {}
  for(let index=0; index < objs.length; ++index) {
    Object.assign(result, objs[index])
  }
  return result
}
