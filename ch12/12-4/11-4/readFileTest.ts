import {readFile} from './readFile'

(async (outputDir) => {
  let result = await readFile(`${outputDir}/hello.txt`)
  console.log('read', result)
  result = await readFile(`${outputDir}/hello.json`)
  console.log('read', JSON.parse(result))
})('output')
