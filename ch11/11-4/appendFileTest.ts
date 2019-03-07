import {appendFile} from './appendfile'
import {readFile} from './readfile'

(async (filepath) => {
  let result = await appendFile(filepath, "Hi, Jane!\n")
  console.log('append', result)
  result = await appendFile(filepath, "Hi, Tom!\n")
  console.log('append', result)
  result = await readFile(filepath)
  console.log('read', result)
})("output/greeting.txt")
