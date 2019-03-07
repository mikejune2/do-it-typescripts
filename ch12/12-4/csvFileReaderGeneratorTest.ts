import { csvFileReaderGenerator } from './csvFileReaderGenerator'

for(let obj of csvFileReaderGenerator('output/person.csv'))
  console.log(obj)
