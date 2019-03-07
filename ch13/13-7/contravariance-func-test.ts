import {All, LastNamed, FirstNamed, createPerson} from './contravariance-func'

let n: All = createPerson()
let l: All = createPerson("Obama")
let f: All = createPerson("Donald", "Trump")

console.log(
  n && n["firstName"],
  l["firstName"],
  f["firstName"]
)