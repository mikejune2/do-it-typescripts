import Person from './Person'
import {mkdir} from './11-4/mkdir'
import {deleteFile} from './11-4/deleteFile'
import {appendFile} from './11-4/appendFile'
import {parseArgs} from './parseArgs'
function* range(min, max) {
  while(min < max)
    yield min++
}

(async ({amountOfPeople, filename, outputDir}) => {
  const dirname = await mkdir(outputDir) 
  const filePath = [outputDir, filename].join('/')
  await deleteFile(filePath) // delete already existing file

  const cr = '\n'
  for(let index of range(1, amountOfPeople + 1)) {
    let person = new Person
    if(index == 1) 
      await appendFile(filePath, person.getKeys())

    await appendFile(filePath, cr + person.getValues())
  }
  console.log(`create ${amountOfPeople} records to ${filePath} in ${outputDir} directory...`)
})(parseArgs())
