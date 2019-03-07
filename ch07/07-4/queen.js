const makeObject = (key, value) => ({[key]: value})
const mergeObjects = (...objs) => {
  let result = {}
  for(let index=0; index < objs.length; ++index) {
    Object.assign(result, objs[index])
  }
  return result
}

let parts = [
  makeObject("group", "Queen"),
  makeObject("members", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]),
  makeObject("songs", ["Bohemian Rhapsody", "Killer Queen", "We Are the Champions"])
]
console.log(
  mergeObjects(...parts)
)
