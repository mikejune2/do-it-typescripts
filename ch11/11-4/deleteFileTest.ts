import {deleteFile} from './deleteFile'

(async (outputDir) => {
  let result = await deleteFile(`${outputDir}/hello.txt`)
  console.log('delete', result)
  result = await deleteFile(`${outputDir}/hello.json`)
  console.log('delete', result)
})('output')
