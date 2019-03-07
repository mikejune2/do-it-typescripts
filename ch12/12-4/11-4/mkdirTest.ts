import {mkdir} from './mkdir'

(async function() {
  let dirname = await mkdir('hello/world')
  console.log(dirname)
  dirname = await mkdir('dist')
  console.log(dirname)
})()
