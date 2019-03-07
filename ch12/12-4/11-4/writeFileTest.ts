import {writeFile} from './writefile'
import {mkdir} from './mkdir'

(async () => {
  await mkdir('output')
  let result = await writeFile("output/hello.txt", "hello world!")
  console.log('write', result)
  result = await writeFile("output/hello.json", JSON.stringify({hello: 1}, null, 2))
  console.log('write', result)
})()
