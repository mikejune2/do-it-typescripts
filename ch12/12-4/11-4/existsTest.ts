import {exists} from './exists'

(async () => {
  let result = await exists('package.json')
  console.log(result)
  result = await exists('dist')
  console.log(result)
})()
