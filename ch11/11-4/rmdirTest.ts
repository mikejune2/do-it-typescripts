import {rmdir} from './rmdir'

(async function() {
  let dirname = await rmdir('hello')
  console.log(dirname)
  dirname = await rmdir('dist')
  console.log(dirname)
})()
