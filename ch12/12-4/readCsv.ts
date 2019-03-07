import {parseArgs} from './parseArgs'
import { csvFileReaderGenerator } from './csvFileReaderGenerator'

function* readCsv({filename, outputDir}) {
  const filePath = [outputDir, filename].join('/')
  console.log(`reading ${filePath} file...`)
  let index = 1
  for(let obj of csvFileReaderGenerator(filePath))
    yield [index++, obj]
}

for(let [index, obj] of readCsv(parseArgs()))
  console.log(index, obj)
